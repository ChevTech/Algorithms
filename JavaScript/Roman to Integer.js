function TreeNode(val) {
 	this.val = val;
 	this.left = this.right = null;
 }

var root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);


var lowestCommonAncestor = function(root, p, q) {
	debugger;
    if(root === null){
        return null;
    }
    
    var stack = [root];
    var LCA = root.val;
    while(stack.length > 0){
        var node = stack.pop();
        var val = node.val;
        if(p < val && q < val){
            stack.push(node.left);
        } else if(p > val && q > val){
            stack.push(node.right);
        } else if(p <= val && q >= val ||
                  q <= val && p >= val)
        {
            LCA = val;
        }
    }
    
    return LCA;    
};

console.log(lowestCommonAncestor(root, 1, 4));