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
		this.mass = 30;
		this.autoDestroy = true;
	}

	public colided(object: PhysicalObject): void {
		if (object instanceof Bullet) {
			this.destroy();
		}
	}
}
