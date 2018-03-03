class Node {
	constructor(d) {
		this.left = null;
		this.right = null;
		this.parent = null;
		this.data = d;
	}

	getdata() {
		return this.data;
	}
}

var numbers = [1,2,3,4,5,6,7,8,9,10];

function addToTree(array, start, end){
	if(end < start) {
		return null;
	}
	var mid = Math.round((start+end)/2);
	var n = new Node(array[mid]);
	
	var leftNode = addToTree(array, start, mid-1);
	if(leftNode != null) {
		leftNode.parent = n;
		n.left = leftNode;
	}

	var rightNode = addToTree(array, mid+1, end);
	if(rightNode != null) {
		rightNode.parent = n;
		n.right = rightNode;
	}

	return n;
}

function createMinBST(array) {
	return addToTree(array, 0, array.length - 1);
}

var bst = createMinBST(numbers);

function preOrder(root) {
	if(root === null) {
		return null;
	}

	console.log(root.data);

	if(root.left != null) {
		preOrder(root.left);
	}

	if(root.right != null) {
		preOrder(root.right);
	}
}

function inOrder(root) {
	if(root == null) {
		return null;
	}

	if(root.left != null) {
		inOrder(root.left);
	}

	console.log(root.data);

	if(root.right != null) {
		inOrder(root.right);
	}
}

function postOrder(root) {
	if(root == null) {
		return null;
	}

	if(root.left != null) {
		postOrder(root.left);
	}

	if(root.right != null) {
		postOrder(root.right);
	}

	console.log(root.data);
}

function bfs(root) {
	if(root === null) {
		return null;
	}

	var list = [root];

	while(list.length > 0) {
		var rootPointer = list.shift();
		console.log(rootPointer.getdata());
		if(rootPointer.left != null) {
			list.push(rootPointer.left);
		}
		if(rootPointer.right != null) {
			list.push(rootPointer.right);
		}
	}
}

debugger;

// preOrder(bst);
// inOrder(bst);
// postOrder(bst);
bfs(bst);
