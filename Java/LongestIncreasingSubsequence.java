class Solution {
    public int lengthOfLIS(int[] nums) {
        int n = nums.length;
        if(n == 0) return 0;

        int[] dp = new int[n];

        int max = 1;
        for(int i=0; i < n; i++){
            dp[i] = 1;
            for(int j=0; j < i; j++){
                if(nums[i] > nums[j]){
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            max = Math.max(dp[i], max);
        }

        return max;
    }
}