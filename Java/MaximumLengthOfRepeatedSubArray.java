class Solution {
    public int findLength(int[] A, int[] B) {
        int m = A.length;
        int n = B.length;

        if(m == 0 || n == 0) return 0;

        int[] dp = new int[n+1];

        int max = 0;
        for(int i=m-1; i >= 0; i--){
            for(int j=0; j < n; j++){
                dp[j] = (A[i] == B[j]) ? dp[j+1] + 1 : 0;
                max = Math.max(max, dp[j]);
            }
        }

        return max;
    }
}