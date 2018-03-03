var minMoves2 = function(nums) {
    debugger;
    if(nums.length === 0){
        return 0;
    }
    
    var mid = Math.floor(nums.length / 2);
    var num = quickSelect(nums, 0, nums.length-1, mid);
    
    console.log(num);
       
    var moves = 0;
    for(var i=0; i < nums.length; i++){
        moves += Math.abs(num - nums[i]);
    }
    
    return moves;
};

function quickSelect(arr, start, end, k){
    if(start < end){
        var  p = partition(arr, start, end);
        if(p < k) {
            quickSelect(arr, p+1, end, k);
        } else if(p > k){
            quickSelect(arr, start, p-1, k);
        } else {
            return arr[p];
        }
    }
}

function partition(arr, start, end){
    var firstHigh = start;
    var p = end;
    
    for(var i=start; i < end; i++){
        var num = arr[i];
        if(num < arr[p]){
            swap(arr, i, firstHigh);
            firstHigh += 1;
        }
    }
    
    swap(arr, firstHigh, p);
    return firstHigh;
}

function swap(arr, i, j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

console.log(minMoves2([1,2,3]));