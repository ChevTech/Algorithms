var arr = [1,2,3,4,5,6,7,8,9];
//		   0,1,2,3,4,5,6,7,8	
function binarySearch(arr, n) {
	var L = 0, R = arr.length-1;
	while(L <= R) {
		var m = Math.round((L+R)/2);
		if(n < arr[m]){
			R = m-1;
		} else if(n > arr[m]){
			L = m+1;
		} else {
			return m;
		}
	}

	return -1;
}

//console.log(binarySearch(arr, ));


var arr = [2, 7, 4, 0, 9, 5, 1, 3];
function findArrayQuadruplet(arr, s){
	var n = arr.length;

	arr.sort();
	if (n < 4) {
		return [];
	}

	for(var i = 0; i <= n-4; i++) {
		for(var j = 0; j <= n-3; j++){
			var L = j+1;
			var R = n-1;
			var D = s - (arr[i] + arr[j]);

			while( L < R ){
				if(arr[L] + arr[R] < D){
					L++;
				} else if(arr[L] + arr[R] > D){
					R++;
				} else {
					return [arr[i], arr[j], arr[L], arr[R]];
				}
			}
		}
	}

	return [];
}

console.log(findArrayQuadruplet(arr, 20))