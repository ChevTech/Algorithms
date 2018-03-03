var arr = [0,1,4,3, Number.MAX_SAFE_INTEGER, 2,5,6];
var n = arr.length; //8

/*
		   4 1 2 3 6 5
var arr = [1,4,3,2,5,6,8,9];
		               i 
		   temp = 3
		   arr[Temp] = 2


var n = arr.length; //8

*/

for(var i=0; i < n-1; i++){
	debugger;
	var temp = arr[i];

	while(temp < n && arr[temp] !== temp){
		swap(arr, temp);
	}
}

function swap(arr, num){
	if(arr[num] === num){
		return;
	}
	var temp = arr[num];
	arr[num] = num;
	swap(arr, temp);
}

console.log(arr);