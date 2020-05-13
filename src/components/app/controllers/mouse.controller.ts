import Controller from "../../common/controller.abstract";

/**
 * Mouse Controller
 */
export default class Mouse extends Controller<"moved" | "shot">() {
	private x: number;
	private y: number;

	/**
	 * Creates template controller
	 */
	public constructor(postfix: string = "") {
		super("Mouse" + postfix);
		this.x = this.container.clientWidth / 2 - 5;
		this.y = this.container.clientHeight / 2 - 5;
	}

	/**
	 * Initialization of Mouse controller
	 */
	public async initialize(): Promise<void> {
		this.container.addEventListener("mousemove", this.onMove.bind(this));
		this.container.addEventListener("click", this.onClick.bind(this));
		setInterval(this.update.bind(this), 33);
	}

	private onMove(event: MouseEvent): void {
		this.x = event.x - this.container.offsetLeft;
		this.y = event.y - this.container.offsetTop;
	}

	private onClick(event: MouseEvent): void {
		this.emit("shot");
	}

	private update(): void {
		this.emit("moved", this.x, this.y);
	}
}
