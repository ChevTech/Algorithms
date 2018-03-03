var combinationSum2 = function(candidates, target) {
    var res = [];
    function bt(res, comb, start, target){
        if(target === 0){
            res.push(comb.map((x) => x));
        }
        
        if(target < 0){
            return;
        }
        
        for(var i=start; i < candidates.length; i++){
            var num = candidates[i];
            comb.push(num);
            bt(res, comb, i+1, target-num);
            comb.pop();
        }
    }
    
    bt(res, [], 0, target);
    return res;
};

console.log(combinationSum2([2,5,2,1,2], 5));

/*
[1,2,2,2,5]
 i

res comb start target
[]   []    0     5
[]   []    0     5





*/

