class Solution {
    public void nextPermutation(int[] nums) {
        int n = nums.length;
        if(n > 0){
            // Find suffix length
            int r = n-1;
            while(r > 0){
                if(nums[r-1] >= nums[r]){
                    r--;
                } else {
                    break;
                }
            }

            if(r > 0){
                int pivot = r-1;
                int q = r;

                for(int i=r; i < n; i++){
                    if(nums[i] <= nums[q] && nums[i] > nums[pivot]) q = i;
                }

                swap(nums, pivot, q);
            }

            reverse(nums, r, n-1);
        }
    }

    public void reverse(int[] nums, int start, int end){
        while(start < end){
            swap(nums, start, end);
            start++;
            end--;
        }
    }

    public void swap(int[] nums, int i, int j){
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}