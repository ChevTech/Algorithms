class Solution {
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        int n = graph.length;
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if(n == 0) return result;

        int[] visited = new int[n];

        List<Integer> path = new ArrayList<Integer>();

        dfs(graph, 0, result, path, visited);
        return result;
    }

    public void dfs(int[][] graph, int v, List<List<Integer>> res, List<Integer> path, int[] visited){
        visited[v] = 1;
        path.add(v);

        if(graph[v].length == 0){
            ArrayList<Integer> foundPath = new ArrayList();
            foundPath.addAll(path);
            res.add(foundPath);
            return;
        }

        for(int w : graph[v]){
            if(visited[w] != 1){
                dfs(graph, w, res, path, visited);
                visited[w] = 0;
                path.remove(path.size() - 1);
            }
        }
    }
}