class taskQueue {
	constructor (tasks) {
		Object.apply (this, {
			levels : {},
			lowest : Number.POSITIVE_INFINITY
		})
	}
	push (task) {
		const {levels, lowest} = this
		const hardness = hardness (task)
		if (hardness in levels)
			levels [hardness].push (task)
		else {
			levels [hardness] = [task]
			lowest = Math.min (hardness, lowest)
		}
	}
	pop () {
		const {levels, lowest} = this
		const task = levels [lowest].pop()

		if (! levels [lowest].length) {
			delete levels [lowest]
			this.lowest = Math.min (...Object.keys ())
		}
		return task
	}

}

andNode

orNode