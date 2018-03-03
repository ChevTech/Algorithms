var topKFrequent = function(nums, k) {
    if(k === 0){
        return 0;
    }
    
    //O(n)
    var freqs = nums.reduce((obj, a) => {
        obj[a] = obj.hasOwnProperty(a) ? obj[a] += 1 : 1;
        return obj;
    }, {});
    
    var keys = Object.keys(freqs);
    
    //O(n) bucketSort
    var bsort = [];
    for(var i=0; i < keys.length; i++){
        var key = keys[i];
        var freq = freqs[key]; 
        
        if(bsort[freq]){
            bsort[freq].push(key);
        } else {
            bsort[freq] = [key];
        }
    }
    
    var res = [];
    for(var j=bsort.length-1; j >= 0; j--){
        var bucket = bsort[j];
        if(!bucket){
            continue;
        }
        
        if(res.length === k){
            break;
        }
        
        while(bucket.length > 0 && res.length < k){
            res.push(Number(bucket.pop()));
        }
    }
    
    return res;
};

var topKFrequent2 = function(nums, k) {
    if (!nums.length || !k) {
        return [];
    }
    var map = {},
        heap;
    nums.forEach(num => {
       map[num] = (map[num] || 0) + 1;
    });
    
    var arr = [];
    for (var char in map) {
        arr.push({
            item: +char,
            key: map[char]
        });
    }
    
    arr = arr.sort((a, b) => b.key - a.key);
    
    arr = arr.slice(0, k);
    
    return arr.map(a => a.item);
};
var arr = [];
for(var i=0; i < 100000; i++){
	arr.push(i);
}
var k=4;
 
var start = Date.now();
var out = topKFrequent(arr, k);
var end = Date.now();

var start2 = Date.now();
var out1 = topKFrequent2(arr, k);
var end2 = Date.now();

console.log("mine", end-start, out, "best", end2 - start2, out1);