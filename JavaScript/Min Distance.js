var minDistance = function(word1, word2) {
    var memo = [];

    if(word1.length === 0 && word2.length === 0){
        return 0;
    }

    if(word1.length === 0 && word2.length !== 0){
        return word2.length;
    }

    if(word1.length !== 0 && word2.length === 0){
        return word1.length;
    }

    for(var x=0; x < word1.length; x++){
        memo.push([]);
    }
        
    for(var i=0; i < word1.length; i++){
        for(var j=0; j < word2.length; j++){
            if(i === 0){
                memo[i][j] = j;
                continue;
            }

            if(j === 0){
                memo[i][j] = i;
                continue;
            }

            if(word1[i] === word2[j]){
                memo[i][j] = memo[i-1][j-1];
            } else {
                memo[i][j] = 1 + Math.min(memo[i-1][j], memo[i][j-1]);
            }        
        }
    }
    
    return memo[word1.length][word2.length];
    
};

console.log(minDistance('s', ''))