var countArrangement = function(N) {
    debugger;
    if(N === 0){ return 0; }
    
    var used = [] 
    for(var j = 0; j <= N; j++){
        used[j] = 0;
    }
    
    var count = 0;
    function helper(N, pos, used){
        if(pos > N){
            count++;
            return;
        }
        
        for(var i=1; i <= N; i++){
            if(used[i] === 0 && ( i % pos === 0 || pos % i === 0 )){
                used[i] = 1;
                helper(N, pos+1, used);
                used[i] = 0;
            }
        }
    }
    helper(N, 1, used);
    return count;
};        

console.log(countArrangement(2));