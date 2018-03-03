var evalRPN = function(tokens) {
    var stack = [];
    
    for(var i=0; i < tokens.length; i++){
        var curr = tokens[i];
        if(Number.isInteger(Number(curr))){
            stack.push(Number(curr));
        } else {
            if(stack.length < 2){
                //throw error
            } else {
                var num2 = stack.pop();
                var num1 = stack.pop();
                stack.push(Eval(curr, num1, num2));
            }
        }
    }
    
    return stack.pop();
};

function Eval(symbol, n1, n2){
    switch(symbol) {
        case '-':
            return n1-n2;
        case '+':
            return n1+n2;
        case '*':
            return n1*n2;
        case '/':
            return n1/n2;
    }
}

console.log(evalRPN(["4","13","5","/","+"]));

