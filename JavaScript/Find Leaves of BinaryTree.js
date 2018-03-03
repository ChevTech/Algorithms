class Node {
	constructor(v) {
		this.left = null;
		this.right = null;
		this.parent = null;
		this.val = v;
	}
}

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);
var n5 = new Node(5);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

function findLeavesOfBinaryTree(root) {
	var result = [];
	debugger;
	function dfs(result, root){
		if(root === null){
			return -1;
		}

		var left = dfs(result, root.left);
		var right = dfs(result, root.right);
		var index = Math.max(left, right)+1;

		if(!result[index]){
			result[index] = [root.val];
		} else {
			result[index].push(root.val);
		}
		return index;
	}

	dfs(result, root);
	return result;
}

function bfs(root) {
	var lestMostSeen = -1;
	var q = [root];

	if(root === null){
		return leftMostSeen;
	}

	while(q.length > 0){
		var node = q.shift();

		if(node.left !== null){
			leftMostSeen = node.left.val;
			q.push(node.left);
		}

		if(node.right !== null){
			q.push(node.right);
		}
	}

	return leftMostSeen;
}

console.log(bfs(n1));
