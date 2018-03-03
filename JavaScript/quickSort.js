function QuickSort(arr, start, end){
	if(start < end){
		var p = partition(arr, start, end);
		QuickSort(arr, start, p-1);
		QuickSort(arr, p+1, end);
	}

	return arr;
}

function partition(arr, low, high){
	var p = 1;
	var fh = low;
	var fl = high;

	for(var i=low; i < arr.length; i++){
		if(arr[i] < arr[p]){
			swap(arr, i, fh);
			fh++;
		} 

		if(arr[i] > arr[p]){
			swap(arr, i, fl);
			fl--;
		} 

	}

	return fh;
}

function swap(arr, i, j){
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

var arr = [0,1,2,0,1,0,1,2,0,2,1];
partition(arr, 0, arr.length-1);
console.log(arr);