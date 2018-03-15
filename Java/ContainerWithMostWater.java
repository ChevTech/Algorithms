class Solution {
    public int maxArea(int[] height) {
        int n = height.length;
        if(n == 0) return 0;

        int lo = 0;
        int hi = n-1;
        int max = Integer.MIN_VALUE;

        while(lo < hi){
            int sum = (hi - lo) * Math.min(height[lo], height[hi]);
            max = Math.max(max, sum);

            if(height[lo] < height[hi]){
                lo++;
            } else {
                hi--;
            }
        }

        return max;
    }
}