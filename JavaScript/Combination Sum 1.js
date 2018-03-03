var combinationSum = function(candidates, target) {
    var res = [];
    function bt(res, comb, start, target){
        if(target === 0){
            res.push(comb.map((x) => x));
            return;
        }
        
        for(var i=start; i < candidates.length; i++){
            var num = candidates[i];
            comb.push(num);
            bt(res, comb, i+1, target - num);
            bt(res, comb, i, target - num);
            comb.pop();
        }
    }
    
    bt(res, [], 0, target);
    return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));