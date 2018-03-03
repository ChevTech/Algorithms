var topKFrequent = function(nums, k) {
    debugger;
    var res = [];
    if(nums.length === 0){
        return res;
    }
    
    var map = nums.reduce((obj, key) => {
        obj[key] = obj[key] ? obj[key] + 1 : 1;
        return obj;
    }, {});
    
    var bucketSort = [];

    var keys = Object.keys(map);
    
    for(var i=0; i < keys.length; i++){
        var key = keys[i];
        var value = map[key]; 
        var arr = bucketSort[value];
        if(arr){
            bucketSort[value].push(key);            
        } else {
            bucketSort[value] = [key];
        }
    }
        
    var n = bucketSort.length-1;
    for(var i=n; i >= 0; i--){
        var topNums = bucketSort[i];
        if(!topNums) { continue; }
        if(k - topNums.length >= 0){
            res = res.concat(topNums);
            k = k - topNums.length;
        } else {
            break;
        }
    }
    return res;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));