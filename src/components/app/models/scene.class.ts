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
		for (const object of this.objects) {
			if (object instanceof PhysicalObject) {
				object.tick();
				//Check for collisions
				for (const colided of this.objects) {
					if (!(colided instanceof PhysicalObject)) continue;
					if (this.areColided(object, colided)) {
						object.colided(colided);
					}
				}
			}
			if (object.autoDestroy && this.isOutOfScene(object)) {
				object.destroy();
			}
			if (object.destroyed) {
				destroyed.push(this.objects.indexOf(object));
			}
		}

		for (const object of destroyed) {
			this.objects.splice(object, 1);
		}
	}

	private areColided(object1: RenderObject, object2: RenderObject): boolean {
		return !(
			object1.y + object1.height < object2.y ||
			object1.y > object2.y + object2.height ||
			object1.x + object1.width < object2.x ||
			object1.x > object2.x + object2.width
		);
	}

	private isOutOfScene(object: RenderObject): boolean {
		return (
			object.x + object.width < 0 ||
			object.y + object.height < 0 ||
			object.x > this.width ||
			object.y > this.height
		);
	}
}
