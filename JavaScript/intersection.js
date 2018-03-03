function intersection(nums1, nums2){
	var store = nums1.reduce(function(map, n){
		map[n] = (map[n] + 1) || 1;
		return map;
	}, {})

	return nums2.filter(function(n){
		if(store[n]){
			store[n]--;
			return true;
		} else {
			return false;
		}
	});
}

var ans = [];
var combArr = [];

function backtrack(k, n){
	debugger;
	var ans = [];
	var combArr = [];
	comb(ans, combArr, k, 1, n);
	return ans;
}

function comb(ans, combArr, k, start, n){
	if (combArr.length > k) {
        return;
    }
	if(combArr.length === k && n === 0){
		ans.push(combArr.map(function(n){return n;}));
		return;
	}

	for(var i=start; i <= 9; i++){
		combArr.push(i);
		comb(ans, combArr, k, i+1, n-i);
		combArr.pop();
	}
}

console.log(backtrack(3, 9));