/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var res = 0;
    if(nums.length === 0){
        return res;
    }
    
    var map = nums.reduce((m, num) => {
        m[num] = m[num] ? m[num] + 1 : 1;
        m['degree'] = Math.max(m['degree'], m[num]); 
        return m;
    }, { 'degree': Number.MIN_SAFE_INTEGER });

    var subArrays = {};
    for(var i=0; i < nums.length; i++){
        var num = nums[i];
        if(map[num] === map['degree']){
            if(subArrays.hasOwnProperty(num)){
                map[num].push(i);
            } else {
                map[num] = [i];
            }
        }
    }
    
    console.log(subArrays);
    
    var values = Object.values(subArrays);
    
    var min = Number.MAX_SAFE_INTEGER;
    for(var j=0; j < values.length; j++){
        var subArray = values[i];
        var start = subArray.shift();
        var end = subArray.pop();
        min = Math.min((end-start), min);
    }
    
    return min;
};

findShortestSubArray([1, 2, 2, 3, 1]);
