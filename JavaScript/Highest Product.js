const highestProduct = function(intArray) {
	debugger;
	let largest = 1;
	let secondLargest = 1;
	let thirdLargest = 1;
	let smallest = -1;
	let secondSmallest = -1;

	if (intArray.length < 3) {
		return intArray;
	}

	let index;
	for (index=0; index < intArray.length; index++) {
		const newInt = intArray[index];
		if (largest <= newInt) {
			thirdLargest = secondLargest;
			secondLargest = largest;
			largest = newInt;
		} else if (smallest >= newInt) {
			secondSmallest = smallest;
			smallest = newInt;
		} else if (secondSmallest > newInt) {
			secondSmallest = newInt;
		} else if (secondLargest <= newInt) {
			thirdLargest = secondLargest;
			secondLargest = newInt;
		} else if (thirdLargest < newInt) {
			thirdLargest = newInt;
		}
	}

	if (smallest*secondSmallest > largest*secondLargest) {
		return smallest*secondSmallest*largest;
	} else {
		return largest*secondLargest*thirdLargest;
	}
}

console.log(highestProduct([-10, -10, 1, 3, 2]));