import PhysicalObject from "./physical.class";
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
	private callback: Function;
	public brain: NeuralNetwork;
	public poiter: RenderObject;
	public fitness: number;
	public best: number;

	public constructor(
		scene: Scene,
		callback: Function,
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
	}

	public copy(): Bot {
		const bot = new Bot(this.scene, this.callback, this.brain.copy());
		bot.best = Math.max(this.fitness, this.best);

		return bot;
	}

	public mutate(rate: number): void {
		this.brain.mutate(rate);
	}

	public tick(): void {
		if (!this.destroyed) {
			this.fitness++;
		}

		const viewSize = 400;
		const cellSize = 40;

		const view = this.getView(viewSize, cellSize);

		/*const index = this.brain.predict(view);

		const cellX = index % (viewSize / cellSize);
		const cellY = Math.floor(index / (viewSize / cellSize));

		const x = this.x - viewSize / 2 + cellX * cellSize;
		const y = this.y - viewSize / 2 + cellY * cellSize;*/

		const [mx, my, speed] = this.brain.predict(view);

		const x = this.x + mx * speed * 400 + this.size[0] / 2;
		const y = this.y + my * speed * 400 + this.size[1] / 2;

		this.poiter.position = [x, y];
		this.move(x, y);

		super.tick();
	}

	public destroy(): void {
		super.destroy();
		this.poiter.destroy();
		this.callback();
	}

	private getView(viewSize: number, cellSize: number): number[] {
		const result = [];

		for (let i = 0; i < viewSize; i += cellSize) {
			for (let j = 0; j < viewSize; j += cellSize) {
				const x = this.x - viewSize / 2 + j;
				const y = this.y - viewSize / 2 + i;

				const cell = new RenderObject();
				cell.position = [x, y];
				cell.size = [cellSize, cellSize];
				let colided = false;
				for (const object of this.scene.objects) {
					if (!(object instanceof Asteroid)) continue;
					if (RenderObject.areColided(object, cell)) {
						colided = true;
						break;
					}
				}

				if (
					x < 0 ||
					y < 0 ||
					x > this.scene.width ||
					y > this.scene.height
				) {
					colided = true;
				}

				result.push(colided ? 1 : 0);
			}
		}

		return result;
	}
}
