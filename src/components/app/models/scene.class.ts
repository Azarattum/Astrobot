import RenderObject from "./object.class";
import PhysicalObject from "./physical.class";

/**
 * Scene class
 */
export default class Scene {
	private context: CanvasRenderingContext2D;
	public objects: RenderObject[];

	public constructor(context: CanvasRenderingContext2D) {
		this.context = context;
		this.objects = [];
	}

	public get width(): number {
		return this.context.canvas.width;
	}

	public get height(): number {
		return this.context.canvas.height;
	}

	public render(): void {
		//Clear scene
		this.context.clearRect(0, 0, this.width, this.height);
		this.context.fillStyle = "black";
		this.context.fillRect(0, 0, this.width, this.height);

		//Render all objects
		for (const object of this.objects) {
			object.render(this.context);
		}
	}

	public tick(): void {
		const destroyed = [];

		//Tick all objects
		for (const i in this.objects) {
			const object = this.objects[i];
			if (object instanceof PhysicalObject) {
				object.tick();
				//Check for collisions
				for (let j = +i + 1; j < this.objects.length; j++) {
					const colided = this.objects[j];
					if (!(colided instanceof PhysicalObject)) {
						continue;
					}
					if (RenderObject.areColided(object, colided)) {
						object.colided(colided);
					}
				}
			}
			if (object.autoDestroy && this.isOutOfScene(object)) {
				object.destroy();
			}
			if (object.destroyed) {
				destroyed.push(object);
			}
		}

		for (const object of destroyed) {
			this.objects.splice(this.objects.indexOf(object), 1);
		}
	}

	private isOutOfScene(object: RenderObject): boolean {
		return (
			object.x + object.width < -50 ||
			object.y + object.height < -50 ||
			object.x > this.width + 50 ||
			object.y > this.height + 50
		);
	}
}
