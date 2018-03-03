var input = [[1,1,0],
 			 [1,1,1],
 			 [0,1,1]];

function countFriendCircles(arr){
	var visited = new Set();
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(!visited.has(i)){
			dfs(arr, i);
			count++;
		}
	}

	function dfs(arr, i){
		for(var j=0; j < arr.length; j++){
			if(arr[i][j] === 1 && !visited.has(j)) {
				visited.add(j);
				dfs(arr, j);
			}
		}
	}

	return count;
}





/*function countFriendCircles(arr){
	var map = arr.reduce(function(accum, array, index) {
		accum[ index ] = array.map(function(num, i) {
			if(num === 1){ 
		    	return i;
		    } else { 
		    	return -1;
			}
		});

		return accum;
	}, {});

	var keys = Object.keys(map);
	var n = keys.length;
	var count = 0;
	var visited = new Set();

	for(var i = 0; i < n; i++){
		if(!visited.has(i)){
			dfs(map, i);
			count++;
		}
	}

	function dfs(map, key){
		visited.add(key);
		var edges = map[key];
		for(var j=0; j < edges.length; j++){
			var edge = edges[j];
			if(edge === -1){
				continue;
			}

			if(!visited.has(edge)){
				dfs(map, edge);
			}
		}
	}

	return count;
}
*/
console.log(countFriendCircles(input));