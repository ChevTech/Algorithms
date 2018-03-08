public class TargetSum {
    public int findTargetSumWays(int[] nums, int S){
        int n = nums.length;
        if(n == 0) return 0;

        int sum = 0;
        for(int i=0; i < nums.length; i++){
            sum += nums[i];
        }

        if(S>sum || S<-sum) return 0; //No way to reach it

        int[] dp = new int[2*sum+1]; //[-1000, 1000]
        dp[0 + sum] = 1;
        for(int i=0; i < nums.length; i++){
            int[] next = new int[2*sum+1];

            for(int j=0; j < 2*sum+1; j++){
                if(dp[j] != 0){
                    next[j + nums[i]] += dp[j];
                    next[j - nums[i]] += dp[j];
                }
            }

            dp = next;
        }

        return dp[sum+S];
    }

    public int findTargetSumWays(int[] nums, int S) {
        int n = nums.length;
        if(n == 0) return 0;
        return rec(nums, 0, 0, S);
    }

    public int rec(int[] nums, int index, int sum, int target){
        if(index == nums.length) {
            if(sum == target) return 1;
            return 0;
        }
        return rec(nums, index+1, sum + nums[index], target) + rec(nums, index+1, sum - nums[index], target);
    }

    public int count;
    public int findTargetSumWays(int[] nums, int S) {
        if(nums.length == 0) return 0;
        backTrack(nums, 0, 0, S);
        return count;
    }

    public void backTrack(int [] nums, int start, int sum, int target){
        if(start == nums.length && sum == target){
            count++;
            return;
        }

        if(start > nums.length-1) return;
        backTrack(nums, start+1, sum + nums[start], target);
        backTrack(nums, start+1, sum - nums[start], target);
    }
}