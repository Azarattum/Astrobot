import Scene from "./scene.class";
import Bot from "./bot.class";

export default class Test {
	private scene: Scene;
	private names: Map<Bot, string>;
	private scores: Map<Bot, number>;
	private subjects: Bot[];

	public constructor(scene: Scene) {
		this.scene = scene;
		this.subjects = [];
		this.names = new Map();
		this.scores = new Map();
	}

	private update(subject: Bot): void {
		const name = this.names.get(subject);
		const alive = this.scene.objects.filter(x => !x.destroyed);

		// console.log(`${name} is dead :(`);

		if (alive.every(x => this.subjects.indexOf(x as Bot) == -1)) {
			console.log(`${name} won this round!`);
			this.scores.set(subject, (this.scores.get(subject) || 0) + 1);
			setTimeout(this.start.bind(this), 0);
		}
	}

	public addSubject(subject: Bot, name: string): void {
		this.subjects.push(subject);
		this.names.set(subject, name);
		this.scores.set(subject, 0);
		subject.callback = this.update.bind(this);
	}

	public start(): void {
		this.scene.objects = [];

		this.subjects.forEach(x => {
			x.destroyed = false;
			x.position = [this.scene.width / 2, this.scene.height / 2];
			this.scene.objects.push(x);
		});
	}

	public stats(): void {
		this.subjects
			.sort(
				(a, b) => (this.scores.get(a) || 0) - (this.scores.get(b) || 0)
			)
			.forEach(x => {
				console.log(`${this.names.get(x)}: ${this.scores.get(x)}`);
			});
	}
}
