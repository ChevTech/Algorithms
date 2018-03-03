function productOfArray(nums){
    debugger;
    var n = nums.length;
    var res = [];
    res[0] = 1;
    for(var i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    var right = 1;
    for (var i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }

    return res
}

console.log(productOfArray([1,2,3,4]));