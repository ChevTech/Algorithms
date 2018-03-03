console.log(minWindow('qwnfenpglqdq'));

function minWindow(s) {
    debugger;
    var map = {};
    var left = 0;
    var right = 0;
    var diff = 0;
    var head = 0;
    var len = Number.MIN_SAFE_INTEGER;
    
    if(s.length === 0){
        return 0;
    }
    
    while(right < s.length){
        var charR = s[right];
        if(map.hasOwnProperty(charR)){
            if(map[charR] > 0){
                map[charR]++;
                diff++;
            } else {
                map[charR]++;
            }
        } else {
            map[charR] = 1;         
        }
        
        right++;

        if(diff === 0){
            len = Math.max(len, right - left);
        }
               
        while(diff > 0){
            var charL = s[left];
            if(map.hasOwnProperty(charL)){
                if(map[charL]-- > 1){
                    diff--;
                }
            }
            left++;
        }
    }
    
    return len;
}

/*
function minWindow(s, t) {
    debugger;
    if(t.length > s.length) return "";
    
    var map = t.split('').reduce((res, char) => {
        res[char] = res[char] ? res[char] + 1 : 1;
        return res;
    }, {});

    var counter = Object.keys(map).length;
    
    var begin = 0, end = 0;
    var head = 0;
    var len = Number.MAX_SAFE_INTEGER;
    
    while(end < s.length){
        var char = s[end];
        if( map.hasOwnProperty(char) ){
            map[char]--;
            if(map[char] === 0) counter--;
        }
        end++;
        
        while(counter === 0){
            var beginChar = s[begin];
            if(map.hasOwnProperty(beginChar)){
                map[beginChar]++;
                if(map[beginChar] > 0){
                    counter++;
                }
            }
            if(end-begin < len){
                len = end - begin;
                head = begin;
            }
            begin++;
        }
        
    }
    if(len === Number.MAX_SAFE_INTEGER) return "";
    return s.substring(head, head+len);
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));*/