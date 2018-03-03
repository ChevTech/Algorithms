function reverseList(head) {
	debugger;
	if(head === null) {
		return null;
	}

	if(head.next === null) {
		return head;
	}

	var tail = reverseList(head.next);
	head.next.next = head;
	head.next = null;

	return tail;
}
