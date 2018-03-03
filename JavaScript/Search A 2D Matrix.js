var matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
], k = 2;

function dfs(arr, k){
	return dfs_rec(arr, k, 0, 0);
	function dfs_rec(arr, k, i, j){
		if(i >= arr.length || j >= arr[0].length){
			return;
		}

		if(k === 0){
			return arr[i][j];
		}
		return Math.min(dfs_rec(arr, k-1, i+1, j), dfs_rec(arr, k-1, i, j+1), dfs_rec(arr, k-1, i+1, j+1));
	}
}

// console.log(dfs(matrix, k));

var nums = [47,23,38,38,3,37,18,29,27,39,29,25,4,2,0,47,10,39,23,17];
var s = 15;

function backTrack(nums, s){
	var sum = 0;
	var arr = [0];
	helper(nums, s, arr, 0, 0);

	function helper(nums, s, arr, sum, start){
		if(start === nums.length){
			if(sum === s){
				arr[0]++;
			}
			return;
		}

		helper(nums, s, arr, sum-nums[start], start+1);
		helper(nums, s, arr, sum+nums[start], start+1);
	}
	return arr[0];	
}

console.log(backTrack(nums, s));



/*
var = matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
], k = 8;

dfs(m, 1, 0, 0) => func(m, 1, 1, 0), func(m, 1, 0, 1), func(m, 1, 1, 1)
func(m, 1, 1, 0) => func(m, 0, 2, 0), func(m, 0, 1, 1), func(m, 0, 2, 1)
*/