import Controller from "../../common/controller.abstract";
import Scene from "../models/scene.class";
import Player from "../models/player.class";
import Asteroid from "../models/asteroid.class";
import Population from "../models/population.class";

/**
 * Game Controller
 */
export default class Game extends Controller<"">() {
	private context: CanvasRenderingContext2D | null = null;
	private scene: Scene | null = null;
	private player: Player | null = null;

	private cycles: number = 1;

	/**
	 * Creates template controller
	 */
	public constructor(postfix: string = "") {
		super("Game" + postfix);
	}

	/**
	 * Initialization of Game controller
	 */
	public async initialize(): Promise<void> {
		const canvas = this.container as HTMLCanvasElement;
		canvas.height = document.body.clientHeight;
		canvas.width = document.body.clientWidth;

		this.context = canvas.getContext("2d");

		if (!this.context) return;
		const scene = new Scene(this.context);
		this.scene = scene;

		const population = new Population(50, scene);
		await population.load("assets/model_9174.json");
		population.populate(scene);

		this.render();
		setInterval(this.tick.bind(this), 25);

		this.expose("render", () => {
			this.scene?.render();
		});

		this.expose("speedup", (x: number) => {
			this.cycles = x;
		});

		this.expose("tick", (x: number) => {
			const temp = this.cycles;
			this.cycles = x || 1;
			this.tick();
			this.cycles = temp;
		});

		this.expose("visualize", (x: boolean) => {
			population.visualize = x;
		});
	}

	public shoot(): void {
		if (!this.player || !this.scene) return;

		const bullet = this.player.shoot();
		if (bullet) {
			this.scene.objects.push(bullet);
		}
	}

	public movePlayer(toX: number, toY: number): void {
		if (!this.player) return;

		const moveFactor = 100;
		const x = (toX - this.player.x - this.player.width / 2) / moveFactor;
		const y = (toY - this.player.y - this.player.height / 2) / moveFactor;

		this.player.movementForce[0] = x;
		this.player.movementForce[1] = y;
	}

	public tick(): void {
		if (!this.scene) return;
		for (let i = 0; i < this.cycles; i++) {
			this.scene.tick();

			const asteroids = this.scene.objects.filter(
				obj => obj instanceof Asteroid
			).length;

			if (asteroids < 20) {
				const side = Math.floor(Math.random() * 4);
				let x, y;
				switch (side) {
					case 0:
						x = -40;
						y = Math.random() * this.scene.height;
						break;
					case 1:
						x = Math.random() * this.scene.width;
						y = -40;
						break;
					case 2:
						x = this.scene.width;
						y = Math.random() * this.scene.height;
						break;
					case 3:
						x = Math.random() * this.scene.width;
						y = this.scene.height;
						break;

					default:
						x = 0;
						y = 0;
						break;
				}
				const asteroid = new Asteroid(x, y);

				this.scene.objects.push(asteroid);
			}
		}
	}

	public render(): void {
		if (!this.scene) return;

		this.scene.render();
		requestAnimationFrame(this.render.bind(this));
	}
}
