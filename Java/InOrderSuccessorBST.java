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
    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        if(root == null || p == null) return p;

        TreeNode inOrderSuccessor = null;
        TreeNode ptr = root;
        while(ptr != null){
            if(p.val < ptr.val){
                inOrderSuccessor = ptr;
                ptr = ptr.left;
            } else {
                ptr = ptr.right;
            }
        }

        return inOrderSuccessor;
    }
}