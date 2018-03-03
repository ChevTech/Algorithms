var string = 'abcd';

function reverseString(string) {
	debugger;
	var array = string.split('');
	var reversedArray = [];
	for(var i = array.length; i >= 0; i--) {
		reversedArray.push(array[i]);
	}

	return reversedArray.join('');
}

function reverseString2(string) {
	var array = string.split('');
	debugger;
	const length = array.length % 2 ? array.length / 2 : (array.length - 1) / 2; 
	for(var i = 0; i < length; i++) {
		var newPosition = array.length - 1 - i;
		var temp = array[newPosition];
		array[newPosition] = array[i];
		array[i] = temp;
	}
	return array.join('');
}

console.log(reverseString2(string));
