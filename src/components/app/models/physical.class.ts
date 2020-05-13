import RenderObject from "./object.class";

/**
 * Represents some example model
 */
export default abstract class PhysicalObject extends RenderObject {
	protected acceleration: number[];
	protected velocity: number[];
	public forces: number[][];
	public mass: number;
	public friction: number;

	public constructor() {
		super();
		this.mass = 1;
		this.friction = 0.1;
		this.acceleration = [0, 0];
		this.velocity = [0, 0];
		this.forces = [];
	}

	abstract colided(object: PhysicalObject): void;

	public get speed(): number {
		return Math.sqrt(
			Math.pow(this.velocity[0], 2) + Math.pow(this.velocity[1], 2)
		);
	}

	public tick(): void {
		//Clear up the acceleration
		this.acceleration.fill(0);
		//Apply forces
		for (const force of this.forces) {
			force.forEach((value, axis) => {
				this.acceleration[axis] += value / this.mass;
			});
		}
		//Apply counter force
		this.acceleration.forEach((value, axis) => {
			this.acceleration[axis] -=
				(this.velocity[axis] * this.friction) / this.mass;
		});

		//Update velocity
		this.acceleration.forEach((value, axis) => {
			this.velocity[axis] += value;
		});

		//Update position
		this.velocity.forEach((value, axis) => {
			this.position[axis] += value;
		});
	}
}
