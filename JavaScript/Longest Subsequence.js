/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    debugger;
    var n = nums.length;
    if(n === 0){
        return 0;
    }
    var dp = [];   
    for(var i=n-1; i >= 0; i--){
        var choices = [1];
        for(var j=i+1; j < n; j++){
            if(nums[j] > nums[i]){
                choices.push(dp[j] + 1);
            }
        }
        dp[i] = Math.max.apply(null, choices);
    }
    
    return Math.max.apply(null, dp);    
};

var arr = [10, 9, 2, 5, 3, 7, 101, 18];
lengthOfLIS(arr);