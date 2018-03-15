class Solution {
    public boolean canJump(int[] nums) {
    int n = nums.length;
    if(n == 0) return false;

    int lastIndex = n-1;
    for(int i=n-2; i >= 0; i--){
        if(nums[i] + i >= lastIndex){
            lastIndex = i;
        }
    }

    return lastIndex == 0;
}
}