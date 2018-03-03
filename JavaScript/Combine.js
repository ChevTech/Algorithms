/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    
    function bt(res, comb, start, n, k){
        if(comb.length === k){
            res.push(comb.map((x) => x));
            return;
        }
        
        if(comb.length > 3) {
            return;
        }
        
        for(var i=start; i <= n; i++){
            comb.push(i);
            bt(res, comb, start, n, k);
            comb.pop();
        }
    }
    
    bt(res, [], 1, n, k);
    return res;
};

console.log(combine(4, 2));
