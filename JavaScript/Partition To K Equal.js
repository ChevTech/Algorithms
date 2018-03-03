/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    if(nums.length === 0){
        return true;
    }
    
    var sum = nums.reduce((total, num) => (total + num), 0);
    var target = sum / k;
    
    var res = [];
    res[k-1] = 0;
    res.fill(0);
    
    nums.sort((a,b) => (b-a));
    
    for(var j=0; j < nums.length; j++){
        var num = nums[j];
        for(var i=0; i < k; i++){
            if(res[i] + num <= target){
                res[i] = res[i] + num;
                if(res[i] === target){ sum -= target }
                break;
            }
        }
    }

    return sum === 0;
};