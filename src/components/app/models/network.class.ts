import * as tf from "@tensorflow/tfjs";
export default class NeuralNetwork {
	private model: tf.Sequential;

	public constructor() {
		tf.setBackend("cpu");

		const inputUnits = 100;
		const hiddenUnits = 30;
		const hidden2Units = 7;
		const outputUnits = 3;

		this.model = new tf.Sequential();
		const hidden = tf.layers.dense({
			inputShape: [inputUnits],
			units: hiddenUnits,
			activation: "sigmoid"
		});

		const hidden2 = tf.layers.dense({
			units: hidden2Units,
			activation: "tanh"
		});

		const output = tf.layers.dense({
			// inputShape: [inputUnits],
			units: outputUnits,
			activation: "tanh"
		});

		this.model.add(hidden);
		this.model.add(hidden2);
		this.model.add(output);
	}

	public predict(data: number[]): number[] {
		const xs = tf.tensor2d([data]);
		const ys = this.model.predict(xs) as tf.Tensor1D;
		const result = ys.dataSync();
		const index = result.indexOf(Math.max(...result));
		tf.dispose(xs);
		tf.dispose(ys);
		return Array.from(result); //index; //
	}

	private gaussianRandom(): number {
		let u = 0;
		let v = 0;
		while (u === 0) u = Math.random();
		while (v === 0) v = Math.random();

		return (
			(Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)) / 3
		);
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
