public class IslandCount2 {
    public int numIslands(char[][] grid) {
        int n = grid.length;
        if(n == 0) return 0;

        int m = grid[0].length;
        if(m == 0) return 0;

        int count = 0;
        for(int i=0; i < n; i++){
            for(int j=0; j < m; j++){
                if(grid[i][j] == '1'){
                    count++;
                    dfsMark(grid, i, j);
                }
            }
        }

        return count;
    }

    public void dfsMark(char[][] grid, int i, int j){
        if(i < 0 || j < 0 || i > grid.length-1 || j > grid[0].length-1 || grid[i][j] != '1'){
            return;
        }

        grid[i][j] = '*';
        dfsMark(grid, i+1, j);
        dfsMark(grid, i-1, j);
        dfsMark(grid, i, j+1);
        dfsMark(grid, i, j-1);
    }
}