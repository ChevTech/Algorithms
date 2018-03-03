var text = '(())';

function bracketMatch(input) {
	var n = input.length
	if(n === 0){
		return 0;
	}

	var balance = 0;
	var missingLefts = 0;

	for(var i = 0; i < n; i++){
		var char = input[i];
		if(char === '('){
			balance++;
		} else {
			if(balance === 0){
				missingLefts++;
			} else {
				balance--;
			}
		}
	}

	return balance + missingLefts;
}

console.log(bracketMatch(text));




// var input = '()';

// function bracketMatch(input) {
// 	var missingBrackets = 0;
// 	var balance = 0;
// 	for(var i=0; i < input.length; i++) {
// 		var current = input[i];
// 		if (current === '(') {
// 			balance++;			
// 		} else if (current === ')') {
// 			balance--;
// 			if (balance < 0) {
// 				missingBrackets++;
// 				balance = 0;
// 			}
// 		}
// 	}
// 	console.log(missingBrackets + balance); 	
// }

// bracketMatch(input);