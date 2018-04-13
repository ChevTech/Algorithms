class Solution {
    public int findClosestLeaf(TreeNode root, int k) {
        HashMap<TreeNode, List<TreeNode>> graph = new HashMap<>();
        dfs(graph, root, null);

        Queue<TreeNode> queue = new LinkedList();
        Set<Integer> visited = new HashSet<Integer>();

        for(TreeNode node : graph.keySet()){
            if(node != null && node.val == k){
                queue.offer(node);
                visited.add(node.val);
            }
        }

        while(!queue.isEmpty()){
            TreeNode v = queue.poll();
            if(v != null){
                if(graph.get(v).size() <= 1) return v.val;

                for(TreeNode w : graph.get(v)){
                    if(w != null){
                        if(!visited.contains(w.val)){
                            queue.offer(w);
                            visited.add(w.val);
                        }
                    }
                }
            }
        }

        return 0;
    }

    public void dfs(HashMap<TreeNode, List<TreeNode>> graph, TreeNode node, TreeNode parent){
        if(node != null){
            if(!graph.containsKey(node)) graph.put(node, new LinkedList<>());
            if(!graph.containsKey(parent)) graph.put(parent, new LinkedList<>());
            graph.get(node).add(parent);
            graph.get(parent).add(node);
            dfs(graph, node.left, node);
            dfs(graph, node.right, node);
        }
    }
}