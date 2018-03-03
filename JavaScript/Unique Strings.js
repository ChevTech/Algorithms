var string = 'abcdef';
var string2 = 'abcdaf';

function uniqueChars(string) {
	debugger;
	var array = string.split('');

	for(var i=0; i < array.length-1; i++) {
		for(var j=i+1; j < array.length; j++) {
			var char1 = array[i];
			var char2 = array[j];
			if(char1 === char2) {
				return false;
			}
		}
	}

	return true;
}

console.log(uniqueChars(string));
console.log(uniqueChars(string2));
