var strStr = function(haystack, needle) {
    debugger;
    if(needle.length === 0){
        return 0;
    }
    
    var map = needle.split('').reduce((m, char) => {
        m[char] = m[char] ? m[char] + 1 : 1;
        return m;
    }, {})
        
    var n = haystack.length;
    var n2 = needle.length;
    var count = n2;
    var start = 0;
    var end = 0;
    
    while(end < n){
        diff = end - start;
        var eChar = haystack[end];
        
        if(map.hasOwnProperty(eChar)){
            map[eChar]--;
            count--;
        }
        
        end++;        
        
        if(count === 0) { return start };
        
        if(diff === n2-1){
            var charL = haystack[start];
            if(map.hasOwnProperty(charL)){
               map[charL]++;
                count++;
            }
            
            start++;
        }
    }
    
    return -1; 
};

strStr('mississippi', 'issi');