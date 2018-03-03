function dutchPartition(nums, i){
	var smaller = 0;
	var equal = 0;
	var larger = nums.length-1;
	var pivot = nums[i];
	console.log(nums[i]);

	while(equal <= larger){
		if(nums[equal] < pivot){
			swap(nums, smaller++, equal++);			
		} else if(nums[equal] === pivot){
			equal++;
		} else {
			swap(nums, equal, larger--);
		}
	}

	return nums;
}

function swap(nums, x, y){
	var tmp = nums[x];
	nums[x] = nums[y];
	nums[y] = tmp;
}


function dutchPartition2(nums, p){
	var firstHigh = 0;
	var n = nums.length-1;
	console.log(nums[p]);
	swap(nums, p, n);

	for(var i=0; i < n; i++){
		if(nums[i] < nums[n]){
			swap(nums, i, firstHigh);
			firstHigh++;
		}
	}

	swap(nums, n, firstHigh);
	return nums;
}

console.log(dutchPartition([2,5,4,3,1], 3));
console.log(dutchPartition2([2,5,4,3,1], 3));
console.log()