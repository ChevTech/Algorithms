
var moveZeroes = function(nums) {
    debugger;
     var n = nums.length
    if(n === 0){
        return;
    }
    
    var zeroPtr = n-1;
    for(var i=0; i <= zeroPtr; i++){
        if(nums[i] === 0){
            var tmp1 = nums[zeroPtr];
            nums[zeroPtr] = 0;
            var j = zeroPtr-1;
            while(j >= i){
                var tmp2 = nums[j];
                nums[j] = tmp1;
                tmp1 = tmp2;
                j--;
            }
            zeroPtr--;
        }
    }
};

moveZeroes([0,0,1])