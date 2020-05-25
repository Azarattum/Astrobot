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
		this.solid = true;

		this.forces.push(this.movementForce);
	}

	public move(toX: number, toY: number): void {
		const moveFactor = 100;
		const x = (toX - this.x - this.width / 2) / moveFactor;
		const y = (toY - this.y - this.height / 2) / moveFactor;

		this.movementForce[0] = x;
		this.movementForce[1] = y;
	}

	public shoot(): Bullet | null {
		if (this.destroyed) return null;

		const length =
			Math.sqrt(Math.pow(this.size[0], 2) + Math.pow(this.size[1], 2)) /
			1.25;

		const bullet = new Bullet(
			this.x +
				this.width / 2 +
				Math.cos(this.direction) * length -
				this.width / 10,
			this.y +
				this.height / 2 +
				Math.sin(this.direction) * length -
				this.height / 10,
			this.direction,
			this.velocity.slice()
		);
		bullet.size[0] = this.size[0] / 5;
		bullet.size[1] = this.size[1] / 5;

		return bullet;
	}

	public tick(): void {
		super.tick();

		if (this.speed > 0.25) {
			let angle = Math.atan(this.velocity[1] / this.velocity[0]);
			if (this.acceleration[0] < 0) angle += Math.PI;
			this.direction = angle;
		}
	}

	public render(context: CanvasRenderingContext2D): void {
		super.render(context);
		const center = [this.x + this.width / 2, this.y + this.height / 2];
		const length =
			Math.sqrt(Math.pow(this.size[0], 2) + Math.pow(this.size[1], 2)) /
			1.25;

		context.strokeStyle = this.fill;
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
		super.colided(object);
		if (object instanceof Asteroid) {
			this.destroy();
		}
	}
}
