import Player from "./player.class";
import NeuralNetwork from "./network.class";
import Scene from "./scene.class";
import RenderObject from "./object.class";
import Asteroid from "./asteroid.class";

/**
 * Bot class
 */
export default class Bot extends Player {
	private scene: Scene;
	public callback: Function | undefined;
	public brain: NeuralNetwork;
	public poiter: RenderObject;
	public visuals: RenderObject[];
	public fitness: number;
	public best: number;

	public constructor(
		scene: Scene,
		callback?: Function,
		brain?: NeuralNetwork
	) {
		super();
		this.brain = brain || new NeuralNetwork();
		this.scene = scene;
		this.autoDestroy = true;
		this.solid = false;
		this.callback = callback;
		this.fitness = 0;
		this.best = 0;
		this.position = [this.scene.width / 2 - 5, this.scene.height / 2 - 5];

		this.poiter = new RenderObject();
		this.poiter.size = [40, 40];
		this.poiter.color = [0, 0, 255, 0.4];
		this.visuals = new Array(100).fill(0).map(x => {
			const fill = new RenderObject();
			fill.size = [40, 40];
			return fill;
		});
	}

	public copy(): Bot {
		const bot = new Bot(this.scene, this.callback, this.brain.copy());
		bot.best = Math.max(this.fitness, this.best);

		return bot;
	}

	public mutate(rate: number): void {
		this.best = 0;
		this.brain.mutate(rate);
	}

	public tick(): void {
		if (!this.destroyed) {
			this.fitness++;
		}

		const viewSize = 500;
		const cellSize = 50;

		const view = this.getView(viewSize, cellSize);

		const index = this.brain.predict(view);

		/*const cellX = index % (viewSize / cellSize);
		const cellY = Math.floor(index / (viewSize / cellSize));

		const x = this.x - viewSize / 2 + cellX * cellSize;
		const y = this.y - viewSize / 2 + cellY * cellSize;*/

		const prediction = this.brain.predict(view);
		const velocity = [0, 0];

		for (let i = 0; i < prediction.length; i++) {
			const value = prediction[i];
			const angle = ((2 * Math.PI) / prediction.length) * i;
			velocity[0] += Math.cos(angle) * value;
			velocity[1] += Math.sin(angle) * value;
		}

		// const angle = ((2 * Math.PI) / 8) * direction;
		const speed = 200;

		const x = this.x + velocity[0] * speed + this.size[0] / 2;
		const y = this.y + velocity[1] * speed + this.size[1] / 2;

		this.poiter.position = [x - 20, y - 20];
		this.move(x, y);

		super.tick();
	}

	public destroy(): void {
		super.destroy();
		this.poiter.destroy();
		this.visuals.forEach(x => x.destroy());
		this.callback?.call(this, this);
	}

	private getView(viewSize: number, cellSize: number): number[] {
		const result = new Array(Math.pow(viewSize / cellSize, 2)).fill(0);
		const count = viewSize / cellSize;

		for (let i = 0; i < viewSize; i += cellSize) {
			for (let j = 0; j < viewSize; j += cellSize) {
				const x = this.x - viewSize / 2 + j;
				const y = this.y - viewSize / 2 + i;

				const cell = new RenderObject();
				cell.position = [x, y];
				cell.size = [cellSize, cellSize];
				let maxSpeed = -26;
				let velocity = [0, 0];
				for (const object of this.scene.objects) {
					if (!(object instanceof Asteroid)) continue;
					if (RenderObject.areColided(object, cell)) {
						const distanceVector = this.position.map(
							(value, axis) => {
								return value - object.position[axis];
							}
						);
						const distance = Math.sqrt(
							distanceVector.reduce((a, b) => a + b * b, 0)
						);
						const relativeSpeed =
							object.velocity
								.map((value, axis) => {
									return value - this.velocity[axis];
								})
								.reduce((a, b, axis) => {
									return a + b * distanceVector[axis];
								}, 0) / distance;

						velocity = velocity.map((value, axis) => {
							return value + object.velocity[axis];
						});

						if (maxSpeed < relativeSpeed) maxSpeed = relativeSpeed;
					}
				}

				if (x < 0) {
					maxSpeed = Math.max(maxSpeed, -this.velocity[0]);
				}
				if (y < 0) {
					maxSpeed = Math.max(maxSpeed, -this.velocity[1]);
				}
				if (x > this.scene.width) {
					maxSpeed = Math.max(maxSpeed, this.velocity[0]);
				}
				if (y > this.scene.height) {
					maxSpeed = Math.max(maxSpeed, this.velocity[1]);
				}

				const speedNormalize = 26;
				const danger = maxSpeed / speedNormalize;

				let index =
					((i / cellSize) * viewSize) / cellSize + j / cellSize;
				result[index] += (danger + 1) / 2;
				result[index] = Math.min(result[index], 1);

				if (velocity[0] > 0 && (index % count) + 1 < count) {
					index++;
				}
				if (velocity[0] < 0 && (index % count) - 1 >= 0) {
					index--;
				}

				if (velocity[1] > 0 && index + count < Math.pow(count, 2)) {
					index += count;
				}
				if (velocity[1] < 0 && index - count >= 0) {
					index -= count;
				}

				result[index] += (danger + 1) / 4;
				result[index] = Math.min(result[index], 1);
			}
		}

		if (this.visuals.length) {
			for (let i = 0; i < Math.pow(count, 2); i++) {
				const x = this.x - viewSize / 2 + (i % count) * cellSize;
				const y =
					this.y - viewSize / 2 + Math.floor(i / count) * cellSize;

				const danger = result[i];
				this.visuals[i].position = [x, y];
				this.visuals[i].color = [255 * danger, 0, 0, 0.5];
			}
		}

		return result;
	}
}
