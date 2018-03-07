public class IslandCount {
    public int numIslands(char[][] grid) {
        int n = grid.length;
        if(n == 0) return 0;

        int m = grid[0].length;
        if(m == 0) return 0;

        UnionFind uf = new UnionFind(n * m);
        int ones = 0;
        for(int row=0; row < n; row++){
            for(int col=0; col < m; col++){
                if(grid[row][col] == '1'){
                    ones += 1;
                    int p = row * m + col;

                    if(col + 1 < m && grid[row][col+1] == '1'){
                        uf.union(p, row * m + (col + 1));
                    }

                    if(row + 1 < n && grid[row+1][col] == '1'){
                        uf.union(p, (row + 1) * m + col);
                    }
                }
            }
        }

        return uf.getIslands(ones);
    }

    class UnionFind {
        int[] id;

        public UnionFind(int n){
            id = new int[n];
            for(int i=0; i < n; i++){
                id[i] = i;
            }
        }

        public int root(int i){
            while(i != id[i]){
                i = id[i];
            }

            return i;
        }

        public boolean find(int p, int q){
            return root(p) == root(q);
        }

        public void union(int p, int q){
            int i = root(p);
            int j = root(q);
            id[i] = j;
        }

        public int getIslands(int totalOnes){
            Set<Integer> seen = new HashSet<>();
            int connected = 0;
            for(int i=0; i < id.length; i++){
                int rt = root(i);
                if(seen.contains(rt)){
                    connected++;
                } else {
                    seen.add(rt);
                }
            }

            return totalOnes - connected;
        }
    }
}