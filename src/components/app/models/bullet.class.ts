import PhysicalObject from "./physical.class";

/**
 * Bullet class
 */
export default class Bullet extends PhysicalObject {
	public constructor(
		x: number,
		y: number,
		direction: number,
		velocity: number[] = [0, 0]
	) {
		super();
		this.size = [5, 5];
		this.color = [255, 255, 255];
		this.position = [x, y];
		this.velocity = velocity;
		this.mass = 0.1;
		this.autoDestroy = true;

		const speed = 3;
		this.forces.push([
			Math.cos(direction) * speed,
			Math.sin(direction) * speed
		]);
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public colided(): void {}
}
