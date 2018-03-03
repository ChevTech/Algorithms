 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

function maximumBinaryTree(nums){
    debugger;
    var stack = [];
    for (var i = 0; i < nums.length; i++) {
        var curNode = new TreeNode(nums[i]);
        
        while (stack.length > 0 && peek(stack).val < nums[i]) {
            curNode.left = peek(stack);
            stack.pop();
        }
        
        if (stack.length > 0) {
            peek(stack).right = curNode;
           
        }
        stack.push(curNode);
    }
    
    return stack.shift();
}

function peek(arr){
    return arr[arr.length-1];
}

console.log(maximumBinaryTree([3,2,1,6,0,5]));
