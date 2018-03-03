var change = function(amount, coins) {
    debugger;
    if(amount === 0 || coins.length === 0){
        return 0;
    }

    var total = 0;
    function bt(coins, start, amount){
        if(amount === 0){
            total += 1;
            return;
        }
        
        if(amount < 0){ return; }
        
        for(var i=start; i < coins.length; i++){
            bt(coins, i, amount - coins[i]);
        }
    }
    bt(coins, 0, amount);
    
    return total;
};


console.log(change(5, [1,2,5]));