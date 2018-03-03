var nums = [1,1,2];

console.log(thirdMax(nums));

function thirdMax(nums){
    debugger;
      var first = nums[0];
    var second = Number.MIN_SAFE_INTEGER;
    var third = Number.MIN_SAFE_INTEGER;
    
    if(nums.length < 2){
        return nums[0];
    }
    
    if(nums.length < 3){
        return Math.max(nums[0], nums[1]);
    }
    
    for(var i=1; i < nums.length; i++){
        var num = nums[i];
        
        if(num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num !== first){
            third = second;
            second = num;
        } else if(num > third && num !== first && num !== second) {
            third = num;
        }
    }
    
    if(third > 0) {
        return third;
    } else if(second > 0){
        return second;
    } else {
        return first;
    }
};
