import Controller from "../../common/controller.abstract";

/**
 * Service that represents template for a new services
 */
export default class Example extends Controller<"">() {
	/**
	 * Creates template controller
	 */
	public constructor(postfix: string = "") {
		super("Example" + postfix);
	}

	/**
	 * Initialization of Example service
	 */
	public async initialize(): Promise<void> {
		this.bind();
		///Service initialization logic goes here
	}
}
