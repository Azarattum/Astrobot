import * as tf from "@tensorflow/tfjs";
export default class NeuralNetwork {
	private model: tf.Sequential;
	private gaussianPrevious: number | null;

	public constructor() {
		this.gaussianPrevious = null;
		tf.setBackend("cpu");

		const inputUnits = 100;
		const hiddenUnits = 35;
		const outputUnits = 8;

		this.model = new tf.Sequential();
		const hidden = tf.layers.dense({
			inputShape: [inputUnits],
			units: hiddenUnits,
			activation: "sigmoid"
		});

		const output = tf.layers.dense({
			units: outputUnits,
			activation: "softmax"
		});

		this.model.add(hidden);
		this.model.add(output);
	}

	public async load(url: string): Promise<void> {
		this.model = (await tf.loadLayersModel(url)) as tf.Sequential;
	}

	public predict(data: number[]): number[] {
		const xs = tf.tensor2d([data]);
		const ys = this.model.predict(xs) as tf.Tensor1D;
		const result = ys.dataSync();
		//const index = result.indexOf(Math.max(...result));

		tf.dispose(xs);
		tf.dispose(ys);

		return Array.from(result);
	}

	private gaussianRandom(): number {
		let y1, x1, x2, w;
		if (this.gaussianPrevious != null) {
			y1 = this.gaussianPrevious;
			this.gaussianPrevious = null;
		} else {
			do {
				x1 = Math.random() * 2 - 1;
				x2 = Math.random() * 2 - 1;
				w = x1 * x1 + x2 * x2;
			} while (w >= 1);
			w = Math.sqrt((-2 * Math.log(w)) / w);
			y1 = x1 * w;
			this.gaussianPrevious = x2 * w;
		}

		return y1;
	}

	public mutate(rate: number): void {
		tf.tidy(() => {
			const weights = this.model.getWeights();
			const mutatedWeights = [];

			for (const tensor of weights) {
				const shape = tensor.shape;
				const data = tensor.dataSync().slice();
				for (const i in data) {
					if (Math.random() < rate) {
						data[i] += this.gaussianRandom();
					}
				}

				const newTensor = tf.tensor(data, shape);
				mutatedWeights.push(newTensor);
			}

			this.model.setWeights(mutatedWeights);
		});
	}

	public copy(): NeuralNetwork {
		return tf.tidy((): any => {
			const copy = new NeuralNetwork();
			const weights = this.model.getWeights().map(x => x.clone());
			copy.model.setWeights(weights);

			return copy;
		});
	}

	public destroy(): void {
		this.model.dispose();
	}
}
