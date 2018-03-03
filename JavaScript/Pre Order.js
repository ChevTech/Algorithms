/* https://leetcode.com/problems/binary-tree-preorder-traversal/#/description */
var createMinBst = require('./BST').createMinBST;

var tree = createMinBst([1,2,3,4,5,6,7,8]);
console.log(preOrder(tree));
console.log(itrPreOrder(tree));

function preOrder(root) {
    var res = [];

    function helper(root) {
        if(root === null){
            return;
        }
        res.push(root.val);

        if(root.left !== null){
            helper(root.left);
        }

        if(root.right !== null){
            helper(root.right);
        }
    }

    helper(root);
    return res;
} 

function itrPreOrder(root) {
    var res = [];
    var stack = [];
    
    if(root === null){
        return res;
    }
    
    var current = root;
    while(current !== null){
        stack.push(current);
        res.push(current.val);
        current = current.left;
    }
    
    while(stack.length > 0) {
        current = stack.pop();
        current = current.right;
        
        while(current !== null) {
            stack.push(current);
            res.push(current.val);
            current = current.left;
        }
    }
    
    return res;
};