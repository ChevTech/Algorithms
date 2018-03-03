/* https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/#/description */

var arr = [4, 5, 6, 7, 0, 1, 2];

console.log(findMin(arr));

function findMin(nums) {
    var L = 0;
    var R = nums.length - 1;
    
    while(L <= R) {
        var M = Math.round((L+R)/2);
        
        if(nums[M] === 0 || nums[M] < nums[M-1]){
            return nums[M];
        } else {
            if(nums[M] < nums[0]){
                R = M-1;
            } else {
                L = M+1;
            }
        }
    }
    
    return nums[0];
};