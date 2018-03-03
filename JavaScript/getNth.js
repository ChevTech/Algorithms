class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

var LinkedList = new Node(1, new Node(4, new Node(3, new Node(4, new Node(5, new Node(1, null))))));

function getNth(head, nth) {
	if (head === null || nth < 1) {
		return null;
	}

	var p1 = head;
	var p2 = head;

	for(var i=1; i <= nth; i++) {
		p2 = p2.next;
		if(p2 === null) {
			return null;
		}
	}

	while(p2 !== null) {
		p1 = p1.next;
		p2 = p2.next;
	}

	return p1.data;
}

console.log(getNth(LinkedList, 3));