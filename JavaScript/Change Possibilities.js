function changePossibilitiesBottomUp(amount, denominations) {
    debugger;
    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;

    for (var j = 0; j < denominations.length; j++) {
        var coin = denominations[j];
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}

console.log(changePossibilitiesBottomUp(4, [1,3,5]));