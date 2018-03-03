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

var root = new Node("");
var left = new Node("~");
var left2 = new Node("B");
var right2 = new Node("C");
left.left = left2;
left.right = right2;
var right = new Node("A");
root.left = left;
root.right = right;

function dec_rec(s, node, root) {
    if(s.length === 0){
        return node.data;
    }
    
    if(node.left === null && node.right === null){
        var res = dec_rec(s, root, root);
        return node.data + res;
    }
    
    newString = s.substring(1);

    if(s[0] == 0){
        res = dec_rec(newString, node.left, root);
    } else {
        res = dec_rec(newString, node.right, root);
    }
    
    return res;
}

var s = '1001011';
console.log(dec_rec(s, root, root));