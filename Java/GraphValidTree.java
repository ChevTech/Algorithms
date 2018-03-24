class Solution {
    public boolean validTree(int n, int[][] edges) {
        if(n == 0) return true;

        UnionFind uf = new UnionFind(n);

        for(int[] pair : edges){
            if(!uf.connected(pair[0], pair[1])){
                uf.union(pair[0], pair[1]);
            } else {
                return false;
            }
        }

        return uf.getRoots() == 1;
    }

    class UnionFind {
        int id[];
        int size[];

        public UnionFind(int n){
            id = new int[n];
            size = new int[n];

            for(int i=0; i < n; i++){
                id[i] = i;
                size[i] = 1;
            }
        }

        public int root(int i){
            while(i != id[id[i]]){
                id[i] = id[id[i]];
                i = id[i];
            }

            return i;
        }

        public boolean connected(int p, int q){
            return root(p) == root(q);
        }

        public void union(int p, int q){
            int i = root(p);
            int j = root(q);

            /* Link small tree below large */
            if(size[i] < size[j]){
                id[i] = j;
                size[j] += size[i];
            } else {
                id[j] = i;
                size[i] += size[j];
            }
        }

        public int getRoots(){
            int[] roots = new int[id.length];
            int count = 0;

            for(int i=0; i < id.length; i++){
                int rt = root(i);
                if(roots[rt] == 0) count++;
                roots[rt] = 1;
            }

            return count;
        }
    }
}