class Solution {
    int m, n;
    int[][] dirs = {{0,1}, {0,-1}, {1,0}, {-1,0}};
    int[][] visited;
    public boolean exist(char[][] board, String word) {
        m = board.length;
        if(m == 0) return false;
        n = board[0].length;

        visited = new int[m][n];

        int pos = 0;
        for(int i=0; i < m; i++){
            for(int j=0; j < n; j++){
                if(word.charAt(pos) == board[i][j]){
                    visited[i][j] = 1;
                    if(dfs(board, word, pos + 1,  i, j)) return true;
                    visited[i][j] = 0;
                }
            }
        }

        return false;
    }

    public boolean dfs(char[][] board, String word, Integer pos, int i, int j){
        for(int[] dir : dirs){
            int x = i + dir[0];
            int y = j + dir[1];

            if(pos == word.length()) return true;

            if(x >= 0 && y >= 0 && x < m && y < n && word.charAt(pos) == board[x][y] && visited[x][y] == 0){
                visited[x][y] = 1;
                if(dfs(board, word, pos + 1, x, y)) return true;
                visited[x][y] = 0;
            }
        }

        return false;
    }
}