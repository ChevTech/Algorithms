/* https://leetcode.com/problems/binary-tree-inorder-traversal/#/description */
var createMinBst = require('./BST').createMinBST;

var tree = createMinBst([1,2,3,4,5,6,7,8]);
// console.log(inOrder(tree));
// console.log(itrInOrder(tree));
console.log(morris(tree));

function inOrder(root) {
    var res = [];

    function helper(root) {
        if (root === null){
            return;
        }

        if(root.left !== null) {
            helper(root.left);
        }

        res.push(root.val);

        if(root.right !== null) {
            helper(root.right);
        }
    }

    helper(root);
    return res;
}

function itrInOrder(root) {
    var stack = [];
    var res = [];
    
    if(root === null){
        return res;
    }
    
    stack.push(root);
    
    var current = root.left;
    while(current !== null){
        stack.push(current);
        current = current.left;
    }
    
    while(stack.length > 0){
        var node = stack.pop();
        res.push(node.val);
        
        current = node.right;
        while(current !== null){
            stack.push(current);
            current = current.left;
        }
        
    }
    
    return res;
};


function morris(root){
    debugger;
    var res = [];
    while(root) {
        if(root.left){
            var left = root.left;
            while(left.right && left.right !== root) {
                left = left.right;
            }

            if(left.right){
                left.right = null;
                res.push(root.val);
                root = root.right;
            } else {
                left.right = root;
                root = root.left;
            }
        } else {
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
}