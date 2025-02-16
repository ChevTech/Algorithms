var arrayPairSum = function(nums) {
	if(nums.length === 2){
	    return Math.min(nums[0], nums[1]);
	}

	var min1 = Math.min(nums[0], nums[1]);
	var min2 = Math.min(nums[0], nums[2]);

	for(var i=0; i < nums.length-1; i++){
	    for(var j=i+1; j < nums.length; j++){
	        if(i === 0 && j < 3) {
	            continue;
	        }
	        var newMin = Math.min(nums[i], nums[j]);
	        if(newMin > min1 && newMin > min2){
	            if(min1 > min2){
	                min2 = newMin;
	            } else {
	                min1 = newMin;
	            }
	        } else if(newMin > min1) {
	            min1 = newMin;
	        } else if(newMin > min2) {
	            min2 = newMin;
	        }
	    }
	}

	return min1 + min2;
};

console.log(arrayPairSum([1,4,3,2]));