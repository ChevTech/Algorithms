var twoSum = function(nums, target) {
    const offByMap = {};
    let index;
    for (index=0; index < nums.length; index ++) {
        const currentNum = nums[index];
        if(offByMap[ currentNum ] !== undefined) {
            return [offByMap[ currentNum ], index];
        } else {
            let offBy = target - currentNum;
            offByMap[ offBy ] = index;
        }
    }
};
console.log(twoSum([0,4,3,0], 0));
