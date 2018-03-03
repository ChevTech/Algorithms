var findTargetSumWays = function(nums, S) {
	debugger;
	var n = nums.length;

    function helper(nums, s, i){
	    if(i === n){
	    	if(s === 0){
	    		return 1;
	    	} else {
	    		return 0;
	    	}
	    }
	    
	    var num = nums[i];
	    return helper(nums, s-num, i+1) + helper(nums, s+num, i+1);
	};

	return helper(nums, S, 0);
};

var findTargetSumWays2 = function(nums, S) {
	var n = nums.length;
	var memo = {};

    function helper(nums, s, i){
    	if(memo.hasOwnProperty(`${i}${s}`)){
    		return memo[`${i}${s}`];
    	}

	    if(i === n){
	    	if(s === 0){
	    		memo[`${i}${s}`] = 1;
	    		return 1;
	    	} else {
	    		memo[`${i}${s}`] = 0;
	    		return 0;
	    	}
	    }
	    
	    var num = nums[i];
	    return helper(nums, s-num, i+1) + helper(nums, s+num, i+1);
	};

	return helper(nums, S, 0);
};


var arr = [1, 1, 1, 1, 1];
var s = 3;

var t1 = Date.now();
console.log(findTargetSumWays(arr, s));
var t2 = Date.now();

var t3 = Date.now();
console.log(findTargetSumWays2(arr, s));
var t4 = Date.now();

console.log(t2-t1, t4-t3);
