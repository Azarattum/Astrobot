import RenderObject from "./object.class";

/**
 * Represents some example model
 */
export default class PhysicalObject extends RenderObject {
	public acceleration: number[];
	public velocity: number[];
	public solid: boolean;
	public forces: number[][];
	public mass: number;
	public friction: number;
	public bounciness: number;

	public constructor() {
		super();

		this.bounciness = 1;
		this.solid = false;
		this.mass = 1;
		this.friction = 0.1;
		this.acceleration = [0, 0];
		this.velocity = [0, 0];
		this.forces = [];
	}

	public colided(object: PhysicalObject): void {
		if (this.solid && object.solid) {
			const newVelocity = this.getCollisionVelocity(object);
			const objectVelocity = object.getCollisionVelocity(this);

			object.velocity = objectVelocity;
			this.velocity = newVelocity;
		}
	}

	private getCollisionVelocity(colided: PhysicalObject): number[] {
		if (!Number.isFinite(this.mass)) {
			return this.velocity.slice();
		}

		const elasticity = this.bounciness * colided.bounciness;
		const colidedMass = Number.isFinite(colided.mass)
			? colided.mass
			: Math.sign(colided.mass) * Number.MAX_SAFE_INTEGER;

		return this.velocity.map((value, axis) => {
			return (
				value -
				(1 + elasticity) *
					(colidedMass / (colidedMass + this.mass)) *
					(value - colided.velocity[axis])
			);
		});
	}

	public get speed(): number {
		return Math.sqrt(this.velocity.reduce((a, b) => a + b * b, 0));
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
