var combinationSum4 = function(nums, target) {
    debugger;
    nums.sort((a,b) => a-b);
    
    if(nums.length === 0){
        return 0;
    }
    
    var memo = [1];
    for(var i=1; i <= target; i++){
        memo[i] = 0;
        for(var j=0; j < nums.length; j++){
            var num = nums[j];
            if(num > i){
                break;
            } else if(num === i){
                memo[i] += 1; 
            } else {
                memo[i] += memo[i-num];
            }
        }
    }

    return memo[target];
};

var nums = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var target = 10;
combinationSum4(nums, target);
