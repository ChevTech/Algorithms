/*const getProductOfInts = function(intArray) {
	let index, index2;
	let productArray = [];
	let product = 1;

	if (intArray.length <= 2) {
		return intArray;
	}

	for (index = 0; index < intArray.length; index++) {
		for (index2 = 0; index2 < intArray.length; index2++) {
			if (index===index2) {
				product = product * 1;
			} else {
				product = product * intArray[index2];
			}
		}
		productArray.push(product);
		product = 1;
	}
	return productArray;
}*/

/*const getProductOfInts = function(intArray) {
	let index;
	let productArray = [];
	let store = 1;
	debugger;

	if (intArray.length <= 2) {
		return intArray;
	}

	for (index = 0; index < intArray.length; index++) {
		let start = index+1;
		let temp = intArray.slice(start, intArray.length);
		let myproduct = temp.reduce(function(a,b){ return a*b}, 1);
		productArray.push(myproduct*store);
		store = store * intArray[index];
	}
	return productArray;
}
*/

const getProductOfInts = function(intArray) {
	let productArray = [];
	let productSoFar = 1;
	let index;
	for (index=0; index < intArray.length; index++) {
		productArray[index] = productSoFar;
		productSoFar = productSoFar * intArray[index];
	}

	productSoFar = 1;
	for (index=intArray.length-1; index >= 0; index--) {
		productArray[index] *= productSoFar;
		productSoFar *= intArray[index];
	}
	return productArray;
}

console.log(getProductOfInts([1, 2, 6, 5, 9]));