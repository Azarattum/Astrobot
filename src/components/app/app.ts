import Manager, { IComponent, ComponentArgs } from "../common/manager.class";
import EnvetsHandler from "./events";
import Game from "./controllers/game.controller";
import Mouse from "./controllers/mouse.controller";

/**
 * Main application class
 */
export default class App {
	private manger: Manager | null = null;
	private events: EnvetsHandler | null = null;

	/**
	 * Initializes the app
	 */
	public async initialize(): Promise<void> {
		const components: IComponent[] = [new Game(), new Mouse()];

		this.manger = new Manager(components);
		this.events = new EnvetsHandler(components);

		const args = await this.getComponentArguments();
		await this.events.registerEvents();
		await this.manger.initialize(args);
	}

	/**
	 * Initializes arguments for the manager
	 */
	private async getComponentArguments(): Promise<ComponentArgs> {
		if (!this.manger) {
			throw new Error("Initialize manager first!");
		}

		return {
			///Return your components init args here
		};
	}

	/**
	 * Closes the application
	 */
	public close(): void {
		if (this.manger) {
			this.manger.close();
			this.manger = null;
		}
		this.events = null;
	}
}
