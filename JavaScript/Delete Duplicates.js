function removeDuplicates(nums) {
	debugger;
	var n = nums.length;
	if (n < 2) {
		return nums;
	}

	var newLength = 1;
	for(var i = 1; i < n; i++){
		if(nums[i] !== nums[i-1]) {
			nums[newLength++] = nums[i];
		}
	}

	return [nums, newLength];
}

console.log(removeDuplicates([1,1,2,3,4,5]));				