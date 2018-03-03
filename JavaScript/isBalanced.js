class Node {
	constructor(d) {
		this.left = null;
		this.right = null;
		this.data = d;
	}

	getdata() {
		return this.data;
	}

	insertLeft(node) {
		this.left = node;
	}

	insertRight(node) {
		this.right = node;
	}
}

var root = new Node('A');
var L1 = new Node('B');
var L1L2 = new Node('D');
var L1R2 = new Node('E');
var R1 = new Node('C');
var R1L1 = new Node('F');
var R1L1L1 = new Node('H');
var R1L1L1R1 = new Node('I');

root.insertRight(R1);
R1.insertLeft(R1L1);
R1L1.insertLeft(R1L1L1);
R1L1L1.insertRight(R1L1L1R1);
root.insertLeft(L1);
L1.insertLeft(L1L2);
L1.insertRight(L1R2);

function getMinDepth(root) {
	if(root === null) {
		return 0;
	}
	
	if(root.left === null && root.right === null) {
		return 1;
	}

	return Math.min(getMinDepth(root.left), getMinDepth(root.right)) + 1;
}

function getMaxDepth(root) {
	if(root === null) {
		return 0;
	}

	if(root.left === null && root.right === null) {
		return 1;
	}

	return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
}

function isBalanced(root) {
	var maxDepth = getMaxDepth(root);
	var minDepth = getMinDepth(root);

	if(maxDepth - minDepth > 1) {
		return false;
	} else {
		return true;
	}
}

console.log(isBalanced(root));
