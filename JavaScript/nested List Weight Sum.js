function dfs_rec(arr, depth){
	debugger;
	var sum = 0; //0
	for(var i = 0; i < arr.length; i++){
		if(Array.isArray(arr[i])){
			sum += dfs_rec(arr[i], depth+1);
		} else {
			sum += arr[i] * depth;
		}
	}
	return sum;
}

function dfs(arr){
	debugger;
	var depth = [];
	var queue = [];
	var sum = 0;

	for(var i=0; i < arr.length; i++){
		queue.push(arr[i]);
		depth.push(1);
	};

	while(queue.length > 0){
		var v = queue.shift();
		var d = depth.shift();

		if(Array.isArray(v)){
			for(var n=0; n < v.length; n++){
				queue.push(v[n]);
				depth.push(d+1);
			}
		} else {
			sum += v * d;
		}
	}

	return sum;
}

var x = [[1,1], 2, [1,1]];
console.log(dfs(x, 1));
