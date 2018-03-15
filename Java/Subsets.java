class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        int n = nums.length;

        List<List<Integer>> set = new ArrayList<List<Integer>>();
        Stack<Integer> subset = new Stack<>();

        backtrack(set, subset, 0, nums);
        return set;
    }

    public void backtrack(List<List<Integer>> set, Stack<Integer> subset, int start, int[] nums){
        set.add(new ArrayList<Integer>(subset));

        for(int i=start; i < nums.length; i++){
            subset.push(nums[i]);
            backtrack(set, subset, i+1, nums);
            subset.pop();
        }
    }
}