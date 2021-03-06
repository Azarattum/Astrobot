/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import Binding from "./binding.class";
import Utils from "./utils.class";

/**
 * Event-driven controller generic type builder
 */
export default function Controller<T extends string>() {
	/**
	 * Abstract of the controller class
	 */
	abstract class Controller {
		/**Component type */
		public type: string = "Controllers";
		/**Controller name */
		public name: string;
		/**Callbacks storage */
		private callbacks: { [type: string]: Function[] } = {};
		/**Last event sender */
		private sender: HTMLElement | null = null;
		/**Placeholders list */
		private bindings: Map<HTMLElement, Binding> | null = null;
		/**Whether to escape html in data binding */
		public safe: boolean = true;

		/**
		 * Creates controller class
		 */
		protected constructor(name: string) {
			this.name = name;
		}

		/**
		 * Initializes data binding for the controller
		 */
		protected bind(): void {
			this.bindings = new Map();

			const containers = Array.from(
				document.querySelectorAll(
					`[controller=${(this as any).name.toLowerCase()}]`
				)
			).reverse() as HTMLElement[];

			for (const container of containers) {
				const binding = new Binding(container);
				binding.bind();
				this.bindings.set(container, binding);
			}
		}

		/**
		 * Closes the controller
		 */
		public close(): void {
			//Close the controller
			this.callbacks = {};
		}

		/**
		 * Listens to a specified event in the controller
		 * @param type Event type
		 * @param callback Callback function
		 */
		public on(type: T, callback: Function): void {
			if (!(type in this.callbacks)) this.callbacks[type] = [];
			this.callbacks[type].push(callback);
		}

		/**
		 * Calls all the registered event listeners in the controller
		 * @param type Event type
		 * @param args Arguments to pass to callbacks
		 */
		protected emit(type: T, ...args: any[]): void {
			if (this.callbacks[type]) {
				this.callbacks[type].forEach(x => x.call(x, ...args));
			}
		}

		/**
		 * Exposes function to be used in global window scope.
		 * Either a custom function can be provided or a method
		 * of current service class (the names must match)
		 * @param name Name of the exposed function (in the scope of service)
		 * @param func Exposed function
		 */
		protected expose(name: string, func: Function | null = null): void {
			if (!(globalThis as any)[this.name]) {
				(globalThis as any)[this.name] = {};
			}
			const exposed =
				func || ((this as any)[name] as Function).bind(this);

			(globalThis as any)[this.name][name] = (...args: any[]) => {
				let result: any;
				if (event?.target) {
					this.sender = event.target as HTMLElement;
					result = exposed(...args);
				} else {
					//Evaluate function as with every single container
					const containers = Array.from(
						document.querySelectorAll(
							`[controller=${(this as any).name.toLowerCase()}]`
						)
					).reverse();

					result = new Set();
					let object = null;
					for (const container of containers) {
						this.sender = container as HTMLElement;
						const res = exposed(...args);

						if (res != undefined) {
							if (typeof res == "object") {
								if (!object) object = {};
								Utils.mergeObjects(object, res);
							} else {
								result.add(res);
							}
						}
					}
					result =
						object ||
						(result.size > 1
							? Array.from(result)
							: result.values().next().value);

					this.sender = null;
				}
				return result;
			};
		}

		/**
		 * The container associated with current controller
		 */
		protected get container(): HTMLElement {
			let container = this.sender
				? this.sender.closest(
						`[controller=${(this as any).name.toLowerCase()}]`
				  )
				: null;
			container =
				container ||
				document.querySelector(
					`[controller=${(this as any).name.toLowerCase()}]`
				);

			if (!container) {
				throw new Error(`Container ${(this as any).name} not found!`);
			}

			return container as HTMLElement;
		}

		/**
		 * Binded to the controller data
		 */
		protected get data(): Record<string, any> {
			if (!this.bindings) {
				throw new Error("Use this.bind() to bind your data first!");
			}

			let bindings: Binding[] = [];
			if (this.sender) {
				const binding = this.bindings.get(this.container);
				if (binding) bindings = [binding];
			} else {
				bindings = Array.from(this.bindings.values());
			}

			const handler = {
				get: (object: any, property: any): any => {
					const path =
						(object.__origin ? object.__origin + "." : "") +
						property;

					const data = object[property];
					//Continue searching
					if (typeof data == "object") {
						return new Proxy({ ...data, __origin: path }, handler);
					}
					if (data === undefined) {
						return new Proxy({ ...data, __origin: path }, handler);
					}

					return data;
				},
				set: (object: any, property: string, value: any) => {
					if (!this.bindings) return false;
					const path =
						(object.__origin ? object.__origin + "." : "") +
						property;

					object[property] = value;
					for (const binding of bindings) {
						binding.set(path, value, !this.safe);
					}

					return true;
				}
			};

			const data: any = {};
			for (const binding of bindings) {
				Utils.mergeObjects(data, binding.get());
			}
			data.__origin = "";
			return new Proxy(data, handler);
		}
	}

	//Return controller with specific typings
	return Controller;
}

if (typeof globalThis === "undefined") {
	(window as any).globalThis = window;
}
/**
 * Smart controller shortcut to the nearest controller property in DOM
 */
(globalThis as any).Controller = new Proxy(
	{},
	{
		get: (obj: {}, prop: string) => {
			if (!event) return;
			let node = event.target as HTMLElement;
			let controller = null;
			//Search for the nearest node with conroller
			while (
				controller == null ||
				(globalThis as any)[controller] == undefined ||
				(globalThis as any)[controller][prop] == undefined
			) {
				controller = node.getAttribute("controller");
				if (controller) {
					controller =
						controller.charAt(0).toUpperCase() +
						controller.slice(1);
				}
				if (node.parentElement) {
					node = node.parentElement;
				} else {
					return;
				}
			}

			//Trying to return exposed controller's function
			return (globalThis as any)[controller][prop];
		}
	}
);
