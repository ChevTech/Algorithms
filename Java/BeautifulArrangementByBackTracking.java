public class BeautifulArrangementByBackTracking {
    int count;
    public int countArrangement(int N) {
        if(N == 0) return 0;

        int[] nums = new int[N+1];

        for(int i=0; i <= N; i++){
            nums[i] = i;
        }

        backTrack(nums, N);
        return count;
    }

    public void backTrack(int[] nums, int start){
        if(start == 0){
            count++;
            return;
        }

        for(int i=0; i < nums.length; i++){
            if(nums[i] != 0 && (nums[i] % start == 0 || start % nums[i] == 0)){
                nums[i] = 0;
                backTrack(nums, start - 1);
                nums[i] = i;
            }
        }
    }
}