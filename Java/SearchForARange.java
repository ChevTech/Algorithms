public class SearchForARange {
    public int[] searchRange(int[] nums, int target) {
        int n = nums.length;
        int[] res = new int[]{-1, -1};
        if(n == 0) return res;

        int l = 0;
        int r = nums.length-1;
        while(l+1 < r){
            int mid = l + (r - l) / 2;

            if(nums[mid] == target){
                int low = mid;
                while(low-1 >= 0 && nums[mid] == nums[low-1]) low--;
                int hi = mid;
                while(hi+1 < n && nums[mid] == nums[hi+1]) hi++;

                res[0] = low;
                res[1] = hi;
                return res;
            } else if(nums[mid] < target){
                l = mid;
            } else {
                r = mid;
            }
        }

        if(nums[l] == target){
            res[0] = l;
            int hi = l;
            while(hi+1 < n && nums[l] == nums[hi+1]) hi++;
            res[1] = hi;
            return res;
        };

        if(nums[r] == target){
            res[1] = r;
            int low = r;
            while(low-1 > 0 && nums[r] == nums[low-1]) low--;
            res[0] = low;
            return res;
        };

        return res;
    }
}