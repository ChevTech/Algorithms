/*
Input:
   1 2 3 4 3   7 8
[0,4,3,2,7,8,2,3,1]
 0,1,2,3,4,5,6,7,8
             i
Output:
[2,3]
*/

function findDuplicates(arr){
	console.log(arr);
	arr.unshift(0);
	var duplicates = [];

	if(arr.length === 0 || arr === null){
		return duplicates;
	}

	for(var i = 1; i <= arr.length; i++){
		var num = arr[i];

		while(num !== i){
			var temp = arr[num];
			if(temp === num){ 
				duplicates.push(temp);
				break;
			}
			arr[num] = num;
			arr[i] = temp;
			num = arr[i];
		}
	}

	return duplicates;
}

var arr = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(arr));
