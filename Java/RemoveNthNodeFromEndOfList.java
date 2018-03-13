class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if(head == null || n == 0){ return head; }

        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode fast = dummy;
        while(fast.next != null && n > 0){
            fast = fast.next;
            n--;
        }

        ListNode tmp = dummy;
        while(fast.next != null){
            tmp = tmp.next;
            fast = fast.next;
        }

        tmp.next = tmp.next.next;
        return dummy.next;
    }
}