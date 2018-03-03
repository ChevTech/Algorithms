function removeDuplicates(nums) {
	var n = nums.length;
	if (n < 2) {
		return nums;
	}

	var newLength = 1;
	for(var i = 0 i < n-1; ++i){
		if(nums[i] !== nums[i-1]) {
			nums[id++] = nums[i];
		}
	}

	return id;
}

console.log(removeDuplicates([1,1,2]));