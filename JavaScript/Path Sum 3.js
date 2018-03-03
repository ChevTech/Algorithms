var pathSum = function(root, sum) {
    var res = 0;
    if(root === null || sum === 0){
        return res;
    }
    
    res += pSum(root, sum - root.val);
    
    if(root.left !== null){
        res += pathSum(root.left, sum);
    }
    
    if(root.right !== null){
        res += pathSum(root.right, sum);
    }
    
    return res;
};

function pSum(node, sum){
    if(node === null && sum === 0){
        return 1;
    }
    
    if(node === null && sum !== 0){
        return 0;
    }
      
    var newSum = sum - node.val;
    return newSum === 0 ? 1 + pSum(node.left, newSum) + pSum(node.right, newSum) : pSum(node.left, newSum) + pSum(node.right, newSum);
}