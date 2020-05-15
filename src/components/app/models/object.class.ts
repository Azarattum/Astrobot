/**
 * Represents some example model
 */
export default class RenderObject {
	public destroyed: boolean;
	public autoDestroy: boolean;
	public size: number[];
	public position: number[];
	public color: number[];

	public constructor() {
		this.position = [0, 0];
		this.size = [1, 1];
		this.color = [255, 255, 255, 1];
		this.destroyed = false;
		this.autoDestroy = false;
	}

	public render(context: CanvasRenderingContext2D): void {
		context.fillStyle = this.fill;
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	public get x(): number {
		return this.position[0];
	}

	public set x(value: number) {
		this.position[0] = value;
	}

	public get y(): number {
		return this.position[1];
	}

	public set y(value: number) {
		this.position[1] = value;
	}

	public get width(): number {
		return this.size[0];
	}

	public set width(value: number) {
		this.size[0] = value;
	}

	public get height(): number {
		return this.size[1];
	}

	public set height(value: number) {
		this.size[1] = value;
	}

	public get fill(): string {
		return `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${
			this.color[3] != null ? this.color[3] : 1
		})`;
	}

	public destroy(): void {
		this.destroyed = true;
	}

	public static areColided(
		object1: RenderObject,
		object2: RenderObject
	): boolean {
		return !(
			object1.y + object1.height < object2.y ||
			object1.y > object2.y + object2.height ||
			object1.x + object1.width < object2.x ||
			object1.x > object2.x + object2.width
		);
	}
}
