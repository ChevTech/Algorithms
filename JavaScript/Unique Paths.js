var uniquePaths = function(m, n) {
    var memo = [];
    for(var x = 0; x < m; x++){
       memo[x] = [];
        for(var y = 0; y < n; y++){
            memo[x][y] = 0;
        }
    }

    for(var i = 0; i < m; i++){
        for(var j = 0 + i; j < n; j++){
            if(j === 0 || i === 0){
                memo[i][j] = 1;
            } else {
                memo[i][j] = memo[i-1][j] + memo[i][j-1];
            }
        }
    }

    return memo[m-1][n-1];
};

function run(n){
    return uniquePaths(n-1, n-1);
}

console.log(run(5));
