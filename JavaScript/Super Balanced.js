  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

function main() {
	debugger;
	var root = new BinaryTreeNode(5);
	var l1 = new BinaryTreeNode(4);
	var l1l2 = new BinaryTreeNode(1);
	l1l2.insertLeft(6);
	l1.insertLeft(l1l2);
	var r1 = new BinaryTreeNode(3);
	root.insertLeft(l1);
	root.insertRight(r1);
}

main();