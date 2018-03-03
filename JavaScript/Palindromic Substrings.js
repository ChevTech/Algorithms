/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var res = 0;
    if(s.length === 0){
        return res;
    }
    
    var memo = [[""]]
    ;
    memo[1] = s.split('');

    for(var n=2; n <= s.length; n++){
        var prev = memo[n-1];
        var next = [];
        for(var j=0; j < prev.length; j++){
            var str = prev[j];      
            for(var c=j+1; c <= n; c++){
                var char = s[c];
                if(str[0] === char){
                    next.push(str.concat(char));
                }
            }    
        }   
        memo[n] = next;
    }
    memo.shift();
    console.log(memo);  
    var ans = memo.reduce((sum, arr) => (sum + arr.length), 0);
    return ans;    
};

countSubstrings('aaa');

