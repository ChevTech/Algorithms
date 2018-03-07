public class BinarySearchTreeIterator {
    public class BSTIterator {
        private Deque<TreeNode> queue;

        public BSTIterator(TreeNode root) {
            this.queue = new ArrayDeque<TreeNode>();
            if(root != null){
                this.queue.push(root);
                TreeNode left = root.left;

                while(left != null){
                    this.queue.push(left);
                    left = left.left;
                }
            }
        }

        /** @return whether we have a next smallest number */
        public boolean hasNext() {
            return this.queue.size() > 0;
        }

        /** @return the next smallest number */
        public int next() {
            TreeNode node = this.queue.poll();
            TreeNode right = node.right;

            if(right != null){
                this.queue.push(right);

                TreeNode left = right.left;
                while(left != null){
                    queue.push(left);
                    left = left.left;
                }
            }

            return node.val;
        }
    }
}