class Node {
	constructor(d) {
		this.children = [];
		this.data = d;
	}

	getdata() {
		return this.data;
	}

	getChildren() {
		return this.children;
	}

	insertChild(Node) {
		this.children.push(Node);
	}
}

var root = new Node(0);
var L1 = new Node(5);
var L1L2 = new Node(4);
var M1 = new Node(3);
var M2L1 = new Node(2);
var M2L2 = new Node(1);
var M2L3 = new Node(1);
var M2R1 = new Node(0);
var M2R2 = new Node(10);
var R1 = new Node(6);
var R2L1 = new Node(1);
var R2R1 = new Node(5);

root.insertChild(L1);
root.insertChild(M1);
root.insertChild(R1);

L1.insertChild(L1L2);

M1.insertChild(M2L1);
M1.insertChild(M2R1);

M2L1.insertChild(M2L2);
M2L2.insertChild(M2L3);

M2R1.insertChild(M2R2);

R1.insertChild(R2L1);
R1.insertChild(R2R1);

function getCheapestCost(root) {
	var children = root.getChildren();

	if (children.length === 0) {
		return [root];
	}

	var costSeen = Number.MAX_SAFE_INTEGER;
	var minNodesArr = [];

	for (var i=0; i < children.length; i++) {
		var minArr = getCheapestCost(children[i]);
		var sum = minArr.reduce((initVal, node) => { return node.getdata() + initVal }, 0);

		if (sum < costSeen){
			console.log(sum, costSeen);
			costSeen = sum;
			minNodesArr = minArr;
		}
	}

	minNodesArr.push(root);
	return minNodesArr;
}

// console.log(getCheapestCost(root));

function level_order(root) {
	if (root === null) {
		return null;
	}

	var queue = [root];
	var result = [];
	while (queue.length > 0) {
		var temp = queue.shift();
		
		if (temp.left !== null) {
			queue.push(temp.left);
		}

		if (temp.right !== null) {
			queue.push(temp.right);
		}

		result.push(temp.getdata());
	};

	console.log(result.join(' '));
}

level_order(root);
