package Java;

import java.util.PriorityQueue;

public class MergeKSortedLists {
    public ListNode mergeKLists(ListNode[] lists) {
        int n = lists.length;
        if(n == 0) return null;

        PriorityQueue<ListNode> pq = new PriorityQueue<ListNode>(n, (a, b) -> { return a.val - b.val; });

        for(int i=0; i < n; i++){
            if(lists[i] != null) pq.offer(lists[i]);
        }

        ListNode dummyHead = new ListNode(0);
        ListNode ptr = dummyHead;
        while(pq.size() > 0){
            ListNode smallest = pq.poll();
            if(smallest.next != null) pq.offer(smallest.next);
            ptr.next = smallest;
            ptr = ptr.next;
        }

        return dummyHead.next;
    }

    public class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }
}
