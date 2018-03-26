class Solution {
    public boolean canPartitionKSubsets(int[] nums, int k) {
        int n = nums.length;
        if(n == 0) return false;

        int sum = 0;
        for(int num : nums){ sum += num; }
        if(sum % k > 0) return false;

        int target = sum / k;
        int[] visited = new int[n];
        return backTracking(nums, visited, 0, k, 0, target);
    }

    public boolean backTracking(int[] nums, int[] visited, int start, int k, int sum, int target){
        if(k == 1) return true;
        if(sum == target) return backTracking(nums, visited, 0, k-1, 0, target);
        for(int i=start; i < nums.length; i++){
            if(visited[i] == 0){
                visited[i] = 1;
                if(backTracking(nums, visited, i+1, k, sum + nums[i], target)) return true;
                visited[i] = 0;
            }
        }

        return false;
    }
}