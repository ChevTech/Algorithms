/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
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
    public TreeNode sortedListToBST(ListNode head) {
        if(head == null) return null;
        if(head.next == null) return new TreeNode(head.val);
        ListNode middle = getMid(head);

        TreeNode root = new TreeNode(middle.next.val);
        ListNode tmp = middle.next.next;
        middle.next = null;
        root.left = sortedListToBST(head);
        root.right = sortedListToBST(tmp);
        return root;
    }

    public ListNode getMid(ListNode head){
        ListNode slow = head;
        ListNode fast = head.next == null ? null : head.next.next;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}