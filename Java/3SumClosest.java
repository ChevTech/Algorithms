public class ThreeSumClosest {
    public int threeSumClosest(int[] nums, int target) {
        int n = nums.length;
        if(n == 0) return 0;

        Arrays.sort(nums);

        int minDiff = Integer.MAX_VALUE;
        int num = 0;
        for(int i=0; i < nums.length; i++){
            int a = nums[i];
            int bi = i+1;
            int ci = n-1;

            while(bi < ci){
                int b = nums[bi];
                int c = nums[ci];

                int sum = a + b + c;
                if(Math.abs(target - sum) < minDiff){
                    num = sum;
                    minDiff = Math.abs(target - sum);
                }

                if(sum < target){
                    bi++;
                } else if(sum > target){
                    ci--;
                } else {
                    return sum;
                }
            }
        }

        return num;
    }
}