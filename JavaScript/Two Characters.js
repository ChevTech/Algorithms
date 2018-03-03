//var s = ''; // 0
//var s = 'abab';
//var s = 'aabab';
var s = 'beabe';

console.log(maxLen(0, s));

function maxLen(n, s) {
	debugger;
	if(s === ''){
		return 0;
	}

	if(checkValid(s)){
		return s.length;
	}

	var set = new Set(s);

	var maxSeen = Number.MIN_SAFE_INTEGER;
	set.forEach((char) => {
		var newS = maxLen(0, remove(s, char));
		if(newS > maxSeen) {
			maxSeen = newS;
		}
	})

	return maxSeen;
}

function remove(s, char) {
	var newS = '';
	for(var i = 0; i < s.length; i++){
		if(s[i] !== char){
			newS += s[i];
		}
	}

	return newS;
}

function checkValid(s){
	var char1 = s[0];
	var char2 = s[1];

	if(char1 === char2) {
		return false;
	}

	for(var i=0; i < s.length; i++){
		if(i%2) {
			if(s[i] !== char2) {
				return false;
			}
		} else {
			if(s[i] !== char1) {
				return false;
			}
		}
	}
	return true;
}