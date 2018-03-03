var arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20;
/*
	[0, 1, 2, 3, 4, 5, 7, 9] s=20
 	 i		
		j
           L
              			  R	

    diff: 16     
    Return: [0, 4, 7, 9];
*/

function findArrayQuadruplet(sum, arr) {
	debugger;
	var n = arr.length;
	if(n < 4) {
		return [];
	}

	arr.sort();

	for(var i=0; i < n-3; i++){
		for(var j=i+1; j < n-2; j++){
			var diff = sum - (arr[i] + arr[j]);
			var L = j+1;
			var R = n-1;
			while(L < R) {
				var innerSum = arr[L] + arr[R];
				if(innerSum < diff){
					L++;
				} else if(innerSum > diff){
					R--;
				} else {
					return [arr[i], arr[j], arr[L], arr[R]];
				}
			}
		}
	}
}

/*
	n = 8
	[0, 1, 2, 3, 4, 5, 7, 9] s=20
 	 i		
                  j
                    L
                          R	
    diff: 19      
    Return: [0, 4, 7, 9];
*/


console.log(findArrayQuadruplet(20, arr));








// function findArrayQuadruplet(sum, arr) {
// 	if(arr.length < 4) {
// 		return [];
// 	}

// 	for(var i=0; i < arr.length; i++){
// 		for(var x=i+1; x < arr.length; x++){
// 			for(var y=i+2; y < arr.length; y++){
// 				for(var z=i+3; z < arr.length; z++){
// 					if(arr[i] + arr[x] + arr[y] + arr[z] === sum) {
// 						return [i,x,y,z]
// 					}
// 				}
// 			}
// 		}
// 	}

// 	return [];
// }
