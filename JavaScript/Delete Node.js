function deleteNode(head) {
	debugger;
	var nextNode = head.next;
	head.data = nextNode.data;
	head.next = head.next.next;
	return head;
}