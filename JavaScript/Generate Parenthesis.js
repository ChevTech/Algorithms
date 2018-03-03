var generateParenthesis = function(n) {
    var res = [];
    if(n == 0) return res;
    
    var choices = [];
    for(var i=0; i < n; i ++){
        choices.push("(");
        choices.push(")");
    }
    
    function bt(comb, parens, choices) {
        if(parens.length == n*2)
            comb.push(parens.slice(''));
        }
        
        for(var i=start; i < n; i; i++) {
            parens.push()
            bt(comb, parens, choices);
            choices.push(parens.pop());            
        }
    }
    
    bt(res, "", 0);
    console.log()
    return res;    
};