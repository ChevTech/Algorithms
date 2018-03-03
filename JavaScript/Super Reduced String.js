var s = 'aaabccddd';

function reduceStringRec(s) {
	if(s.length === 0) {
		return s;
	}

	if(s[0] === s[1]){
		return reduceStringRec(s.substring(2));
	} else {
		return s[0] + reduceStringRec(s.substring(1));
	}
}

console.log(reduceStringRec(s));