var isValid = function(s) {
    debugger;
    if(s.length === 0){
        return true;
    }
    
    if(s.length % 2 === 1){
        return false;
    }

    var i = 0;
    var j = 1;
    while(i < s.length / 2){
        if(s[i] === '(' && s[j] === ')' ||
           s[i] === '[' && s[j] === ']' ||
           s[i] === '{' && s[j] === '}'){
            s += 2;
            j += 2;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isValid('()'));