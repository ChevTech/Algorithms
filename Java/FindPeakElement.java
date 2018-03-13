public class FindPeakElement {
    public int findPeakElement(int[] nums) {
        int n = nums.length;
        if(n == 0) return 0;

        int l = 0;
        int r = nums.length-1;

        while(l < r){
            int mid = l + (r - l) / 2;
            if(mid+1 > n-1) return l;
            if(nums[mid] < nums[mid+1]){
                l = mid+1;
            } else {
                r = mid;
            }
        }

        return l;
    }
}