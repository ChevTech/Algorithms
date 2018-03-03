function nestedListWeight(arr){
	if(arr === null || arr.length === 0){
		return 0;
	}

	var hashMap = {};
	var stack = [];
	var layers = [];

	for(var i = 0; i < arr.length; i++){
		stack.push(arr[i]);
		layers.push(1);
	}

	var maxLayer = Number.MIN_SAFE_INTEGER;
	while(stack.length > 0){
		var top = stack.pop();
		var topLayer = layers.pop();

		maxLayer = Math.max(maxLayer, topLayer);
		if(top)
	}
}

/*
[[1,1], 2, [1,1]]
   i

dfs([1,1], 0) 

depth = 1;
*/

