import PhysicalObject from "./physical.class";
import Bullet from "./bullet.class";
import Asteroid from "./asteroid.class";

/**
 * Player class
 */
export default class Player extends PhysicalObject {
	public movementForce: number[];
	private direction: number;

	public constructor() {
		super();
		this.size = [20, 20];
		this.color = [255, 255, 255];
		this.position = [0, 0];
		this.movementForce = [0, 0];
		this.direction = 0;

		this.forces.push(this.movementForce);
	}

	public shoot(): Bullet | null {
		if (this.destroyed) return null;

		const bullet = new Bullet(
			this.x + this.width / 2,
			this.y + this.height / 2,
			this.direction,
			this.velocity.slice()
		);

		this.size[0]++;
		this.size[1]++;
		bullet.size[0] = this.size[0] / 5;
		bullet.size[1] = this.size[1] / 5;

		return bullet;
	}

	public tick(): void {
		super.tick();

		if (this.speed > 0.25) {
			let angle = Math.atan(this.velocity[1] / this.velocity[0]);
			if (this.velocity[0] < 0) angle += Math.PI;
			this.direction = angle;
		}
	}

	public render(context: CanvasRenderingContext2D): void {
		super.render(context);
		const center = [this.x + this.width / 2, this.y + this.height / 2];
		const length =
			Math.sqrt(Math.pow(this.size[0], 2) + Math.pow(this.size[1], 2)) /
			1.25;

		context.strokeStyle = "white";
		context.lineWidth = length / 4;

		context.beginPath();
		context.moveTo(center[0], center[1]);
		context.lineTo(
			center[0] + Math.cos(this.direction) * length,
			center[1] + Math.sin(this.direction) * length
		);
		context.closePath();
		context.stroke();
	}

	public colided(object: PhysicalObject): void {
		if (object instanceof Asteroid) {
			this.destroy();
		}
	}
}
