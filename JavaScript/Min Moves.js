var minMoves = function(nums) {
    debugger;
    var count = 0;
    var n = nums.length;
    if(n < 2){
        return count;
    }
    
    var max = Math.max.apply(null, nums);
    var min = Math.min.apply(null, nums);
    
    while(min !== max){
        var newMax;
        var diff = max - min;
        for(var i=0; i < nums.length; i++){
            var num = nums[i];
            if(num < max){
                nums[i] = num + diff;
                newMax = Math.max(nums[i], max);
            }
        }
        count++;
        min += diff;
        max = newMax;
    }
    
    return count;
};

console.log(minMoves([1,2,3]));