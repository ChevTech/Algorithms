var findLongestChain = function(pairs) {    
    debugger;

    var res = 0;
    if(pairs.length === 0){
        return res;
    }
    
    pairs.sort((a,b) => { return a[0] - b[0]});
    var firstPair = pairs.shift();
    return 1 + longestChain(pairs, firstPair[1]);    
};

function longestChain(pairs, b){
    if(pairs.length === 0){
        return 0;
    }
    
    var maxLength = Number.MIN_SAFE_INTEGER;
    while(pairs.length > 0){
        var pair = pairs.shift();
        if(pair[0] > b){
            maxLength = Math.max(maxLength, 1 + longestChain(pairs, pair[1]));
        }
    }
    
    return maxLength;
}
console.log(findLongestChain([[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]]));