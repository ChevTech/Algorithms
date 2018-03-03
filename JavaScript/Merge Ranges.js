const mergeRanges = function(timeArray) {
	const sortedArray = timeArray.sort(function(a,b) {
		return a[0] - b[0];
	});

	let myArray = [];
	let index = 0;

	while(index < sortedArray.length) {
		let start = sortedArray[index][0];
		let nextStart = sortedArray[index+1] ? sortedArray[index+1][0] : Number.MAX_SAFE_INTEGER;
		let end = sortedArray[index][1];

		while (end >= nextStart) {
			index += 1;
			end = sortedArray[index][1];
			nextStart = sortedArray[index+1] ? sortedArray[index+1][0] : Number.MAX_SAFE_INTEGER;
		}

		myArray.push([start, end]);
		index += 1;
	}
	return myArray;
}

//console.log(mergeRanges([[0,1], [3,5], [4,8], [10,12], [9,10]]));
console.log(mergeRanges([[1,2], [2,3]]));
//console.log(mergeRanges([[1,5], [2,3]]));