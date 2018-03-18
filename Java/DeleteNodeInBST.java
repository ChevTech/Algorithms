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
    /*
        In a BST node deletion, we need to handle three cases:

        1.) Delete node has no children
        2.) Delete node has 1 child (left || right);
        3.) Delete node has 2 children
            -Find next in order successor
            -Set node to in order successor
            -Delete in order successor from tree
    */

    public TreeNode deleteNode(TreeNode root, int key) {
        if(root == null) return null;
        /* Find Node */
        if(key < root.val){
            root.left = deleteNode(root.left, key);
        } else if(key > root.val){
            root.right = deleteNode(root.right, key);
        } else {
            /* Node Found */
            if(root.left == null){ //Handle case #1 & #2
                return root.right;
            } else if(root.right == null){ //Handle Case #1 & #2
                return root.left;
            }

            // Handle case #3
            TreeNode inOrderSuccessor = inOrderSuccessor(root);
            root.val = inOrderSuccessor.val;
            root.right = deleteNode(root.right, inOrderSuccessor.val);
        }

        return root;
    }

    public TreeNode inOrderSuccessor(TreeNode root){
        TreeNode candidate = root.right;
        while(candidate.left != null){
            candidate = candidate.left;
        }

        return candidate;
    }
}