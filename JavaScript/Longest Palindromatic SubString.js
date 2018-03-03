/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 0){
        return 0;
    }
    debugger;
    
    var start = 0;
    var end = 0;
    for(var i=0; i < s.length; i++){
        var len1 = check(s,i,i);
        var len2 = check(s, i, i+1);
        var len  = Math.max(len1, len2);
        
        if(len > end-start){
            start = i - Math.floor((len-1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return s.substring(start, end+1);
    
    function check(s, l, r){
        while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)){
            l--;
            r++;
        }
        
        console.log(r-l-1);
        
        return r - l - 1;
    }
};

longestPalindrome("babad");