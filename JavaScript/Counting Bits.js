function countBits(n){
    var arr = [];
    for(var i=1; i<=n; i++){
        arr[i] = arr[i >> 1] + (i&1);
    }
    return arr;
}

console.log(countBits(5));