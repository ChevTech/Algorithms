var findDuplicates = function(nums) {
    debugger;
    var res = [];
    
    if(nums.length === 0){
        res;
    }
    
    nums.unshift(0);
        
    for(var i=1; i < nums.length; i++){
        var n = Math.abs(nums[i]);
        nums[n] = nums[n] * -1;
        if(nums[n] === Math.abs(nums[n])){
            res.push(n);
        }
    }
    
    return res;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));