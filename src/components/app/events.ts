import { IComponent } from "../common/manager.class";
import Game from "./controllers/game.controller";
import Mouse from "./controllers/mouse.controller";

/**
 * Event handler for application components
 */
export default class EnvetsHandler {
	private gameController: Game;
	private mouseController: Mouse;

	/**
	 * Creates new envet handler for components
	 * @param components Components to handle interactions with
	 */
	public constructor(components: IComponent[]) {
		const component: { [name: string]: IComponent } = {};
		components.forEach(x => (component[x.name] = x));

		//Defining all components
		this.gameController = component["Game"] as Game;
		this.mouseController = component["Mouse"] as Mouse;
	}

	/**
	 * Registers all events for components
	 */
	public async registerEvents(): Promise<void> {
		this.mouseController.on("moved", (x: number, y: number) => {
			this.gameController.movePlayer(x, y);
		});

		this.mouseController.on("shot", () => {
			this.gameController.shoot();
		});
	}
}
