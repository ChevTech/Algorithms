/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode lastNodeVisited = null;

        while(!stack.isEmpty() || root != null){
            if(root != null){
                stack.push(root);
                root = root.left;
            } else {
                TreeNode peek = stack.peek();
                if(peek.right != null && lastNodeVisited != peek.right){
                    root = peek.right;
                } else {
                    result.add(peek.val);
                    lastNodeVisited = stack.pop();
                }
            }
        }

        return result;
    }
}