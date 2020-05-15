import Bot from "./bot.class";
import Scene from "./scene.class";

export default class Population {
	private generation: Bot[];
	public scene: Scene;
	public size: number;
	public visualize: boolean = false;

	public readonly MUTATION_RATE = 0.05;

	public constructor(size: number, scene: Scene) {
		this.size = size;
		this.scene = scene;
		this.generation = new Array(size).fill(null).map(x => {
			const bot = new Bot(scene, this.update.bind(this));
			bot.x = scene.width / 2 - 5;
			bot.y = scene.height / 2 - 5;
			return bot;
		});
	}

	public update(): void {
		if (this.generation.every(x => x.destroyed)) {
			const generation = this.nextGeneration();
			this.generation.forEach(x => x.brain.destroy());
			this.generation = generation;

			setTimeout(() => {
				this.populate(this.scene);
			}, 0);
		}
	}

	public nextGeneration(): Bot[] {
		console.count("Generation");
		const bestScore = Math.max(...this.generation.map(x => x.fitness));
		console.log("Best score:", bestScore);

		const generation = new Array(this.size - 2).fill(null).map(x => {
			const bot = this.pool().copy();
			bot.mutate(this.MUTATION_RATE);
			return bot;
		});

		const topScore = Math.max(...this.generation.map(x => x.best));
		const top = this.generation.find(x => x.best >= topScore);
		const best = this.generation.find(x => x.best >= bestScore);
		if (top) generation.push(top.copy());
		if (best) generation.push(best.copy());

		return generation;
	}

	public populate(scene: Scene): void {
		//Remove old bots
		scene.objects = [];
		//Add new bots
		for (const bot of this.generation) {
			scene.objects.push(bot);
			scene.objects.push(bot.poiter);
			if (this.visualize) {
				scene.objects.push(...bot.visuals);
			} else {
				bot.visuals = [];
			}
		}
	}

	public pool(): Bot {
		const total = this.generation.reduce(
			(a, b) => a + b.fitness * b.fitness,
			0
		);
		let index = 0;
		let chance = Math.random();

		while (chance > 0) {
			chance -=
				(this.generation[index].fitness *
					this.generation[index].fitness) /
				total;
			index++;
		}

		return this.generation[index - 1];
	}
}
