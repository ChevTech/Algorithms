var x = [1,2,3,4,5,6,7,8,9];

function reverseList(arr, start, end){
	while(start < end){
		var temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
	return arr;
}

console.log(reverseList(x, 0, x.length-1));


/*
var arr = ['H','e','l','l','o', ' ',  'g', 'e', 't', ' ', ' ', 's', 'm', 'a', 'r', 't' ];
		   // s i

// function reverseWord(arr) {
// 	var n = arr.length;
// 	reverseArray(arr, 0, n-1);

// 	var wordStart = 0;
// 	for(var i=0; i < n; i++){
// 		if(arr[i] === ' '){
// 			reverseArray(arr, wordStart, i-1);
// 			wordStart = i + 1;
// 		} else if(i === n-1){
// 			reverseArray(arr, wordStart, i);
// 		}
// 	}

// 	return arr;
// }

function reverseWord(arr) {
	var n = arr.length;
	reverseArray(arr, 0, n-1);

	var wordStart = null;
	for(var i=0; i < n; i++){
		if(arr[i] === ' '){
			if(wordStart !== null){
				reverseArray(arr, wordStart, i-1);
				wordStart = null;
			}
		} else if(i === n-1){
			if(wordStart !== null){
				reverseArray(arr, wordStart, i);
			}
		} else {
			if(wordStart === null){
				wordStart = i;
			}
		}
	}

	return arr;
}

function reverseArray(arr, start, end){
	while(start < end){
		var temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}

console.log(reverseWord(arr));*/