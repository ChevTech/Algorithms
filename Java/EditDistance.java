class Solution {
    // Time: O(m*n), Space: O(m*n)
    public int minDistance(String word1, String word2) {
        int n = word1.length();
        int m = word2.length();

        if(n == 0) return m;
        if(m == 0) return n;

        int maxLen = Math.max(n,m);

        int[][] matrix = new int[maxLen+1][maxLen+1];

        for(int i=0; i < maxLen+1; i++){
            matrix[i][0] = i;
            matrix[0][i] = i;
        }

        for(int i=1; i <= n; i++){
            for(int j=1; j <= m; j++){
                if(word1.charAt(i-1) == wordx2.charAt(j-1)){
                    matrix[i][j] = matrix[i-1][j-1];
                } else {
                    matrix[i][j] = 1 + Math.min(Math.min(matrix[i-1][j], matrix[i][j-1]), matrix[i-1][j-1]);
                }
            }
        }

        return matrix[n][m];
    }

    // Time: O(m*n), Space: O(m)
    class Solution {
        public int minDistance(String word1, String word2) {
            int m = word1.length();
            int n = word2.length();

            if(m == 0) return n;
            if(n == 0) return m;

            int[] dp = new int[m+1];

            for(int i = 1; i < m+1; i++){
                dp[i] = i;
            }

            for(int j=1; j <= n; j++){
                int pre = dp[0];
                dp[0] = j;
                for(int i=1; i <= m; i++){
                    int tmp = dp[i];

                    if(word1.charAt(i-1) == word2.charAt(j-1)){
                        dp[i] = pre;
                    } else {
                        dp[i] = 1 + Math.min(Math.min(dp[i], dp[i-1]), pre);
                    }

                    pre = tmp;
                }
            }

            return dp[m];
        }
    }
}