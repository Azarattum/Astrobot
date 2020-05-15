import PhysicalObject from "./physical.class";
import Bullet from "./bullet.class";

/**
 * Asteroid class
 */
export default class Asteroid extends PhysicalObject {
	public constructor(x: number, y: number) {
		super();
		const maxSize = 30;
		const maxVelocity = 10;

		this.size = [
			Math.random() * maxSize + maxSize / 2,
			Math.random() * maxSize + maxSize / 2
		];
		this.color = [140, 20, 75];
		this.position = [x, y];
		this.velocity = [
			Math.random() * maxVelocity * 2 - maxVelocity,
			Math.random() * maxVelocity * 2 - maxVelocity
		];
		this.mass = (this.size[0] + this.size[1]) / 2;
		this.friction = 0;
		this.bounciness = 0.2;
		this.autoDestroy = true;
		this.solid = true;
	}

	public colided(object: PhysicalObject): void {
		super.colided(object);
		if (object instanceof Bullet) {
			this.destroy();
		}
	}
}
