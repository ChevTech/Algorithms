class Solution {
    private final int[][] adjacent = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
    private int n, m;

    public int longestIncreasingPath(int[][] matrix) {
        m = matrix.length;
        if(m == 0) return 0;
        n = matrix[0].length;

        int maxPath = 0;
        for(int i=0; i < m; i++){
            for(int j=0; j < n; j++){
                maxPath = Math.max(maxPath, dfs(matrix, i, j));
            }
        }

        return maxPath;
    }

    public int dfs(int[][] matrix, int i, int j){
        int ans = 0;

        for(int[] w : adjacent){
            int x = i + w[0];
            int y = j + w[1];

            if(x >= 0 && y >= 0 && x < m && y < n && matrix[i][j] < matrix[x][y]){
                ans = Math.max(ans, dfs(matrix, x, y));
            }
        }

        return ++ans;
    }
}