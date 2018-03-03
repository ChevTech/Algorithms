class temperatureTracker {
	constructor() {
		this.maxSeen = Number.MIN_SAFE_INTEGER;
		this.minSeen = Number.MAX_SAFE_INTEGER;
		this.temps = [];
		this.currentSum = 0;
		this.timeSeen = {};
	}

	insert(temp) {
		this.maxSeen = Math.max(this.maxSeen, temp);
		this.minSeen = Math.min(this.minSeen, temp);
		this.currentSum += temp;
		if (!this.timeSeen[temp]) {
			this.timeSeen[temp] = 1;
		} else {
			this.timeSeen[temp] += 1;
		}
		this.temps.push(temp);
	}

	get Max() {
		return this.maxSeen;
	}

	get Min() {
		return this.minSeen;
	}

	get Mean() {
		return this.currentSum / this.temps.length;
	}

	get Mode() {
		for (var [key, value] of this.timeSeen) {
			let temp = -1;
			let seen = 0;
			if (value >= temp) {
				temp = key;
				seen = value;
			}
		}
		return temp;
	}
}
debugger;

const tempTracker = new temperatureTracker();
tempTracker.insert(1);
tempTracker.insert(2);
tempTracker.insert(3);
tempTracker.insert(4);
console.log(tempTracker.Max);
console.log(tempTracker.Min);
console.log(tempTracker.Mean);
console.log(tempTracker.Mode);

