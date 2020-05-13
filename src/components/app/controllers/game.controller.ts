import Controller from "../../common/controller.abstract";
import Scene from "../models/scene.class";
import Player from "../models/player.class";
import Asteroid from "../models/asteroid.class";

/**
 * Game Controller
 */
export default class Game extends Controller<"">() {
	private canvas: HTMLCanvasElement | null = null;
	private context: CanvasRenderingContext2D | null = null;
	private scene: Scene | null = null;
	private player: Player | null = null;

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
		this.canvas = canvas;

		if (!this.context) return;
		const scene = new Scene(this.context);
		const player = new Player();
		scene.objects.push(player);

		player.x = canvas.width / 2 - 5;
		player.y = canvas.height / 2 - 5;

		this.scene = scene;
		this.player = player;

		this.render();
		setInterval(this.tick.bind(this), 30);
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
		this.scene.tick();

		const asteroids = this.scene.objects.filter(
			obj => obj instanceof Asteroid
		).length;

		if (asteroids < 10) {
			const asteroid = new Asteroid(
				Math.random() * this.scene.width,
				Math.random() * this.scene.height
			);

			this.scene.objects.push(asteroid);
		}
	}

	public render(): void {
		if (!this.scene) return;

		this.scene.render();
		requestAnimationFrame(this.render.bind(this));
	}
}
