public class BinaryTreeRightSideView {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        if(root == null) return result;

        Deque<TreeNode> queue = new ArrayDeque<TreeNode>();
        queue.offer(root);

        while(queue.size() > 0){
            result.add(queue.peek().val);
            int size = queue.size();

            for(int i=0; i < size; i++){
                TreeNode node = queue.poll();
                if(node.right != null){
                    queue.offer(node.right);
                }
                if(node.left != null){
                    queue.offer(node.left);
                }
            }
        }

        return result;
    }
}