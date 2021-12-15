import {getRandomIntBetween} from "../lib/helpers"

export class Challenge {
	constructor(
		public a?: number,
		public b?: number
	) {
		if(this.a && this.b) return
		this.a = getRandomIntBetween(0, 9)
		this.b = getRandomIntBetween(0, 9)
	}

	get solution() {
		return this.a + this.b
	}
}

