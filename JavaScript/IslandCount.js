var binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ];


function islandCount(arr){
	var n = arr.length;
	var count = 0;

	if(arr.length === 0 || arr === null){
		return 0;
	}

	for(var i = 0; i < n; i++){
		for(var j = 0; j < arr[0].length; j++){
			if(arr[i][j] === 1){
				markIsland(arr, i, j);
				count++;
			}
		}
	}

	return count;
}

// function markIsland(arr, i, j){
// 	if(i < 0 || i >= arr.length || j < 0 || j >= arr[0].length){
// 		return;
// 	}

// 	if(arr[i][j] === 1){
// 		arr[i][j] = '*';
// 		markIsland(arr, i+1, j);
// 		markIsland(arr, i, j+1);
// 		markIsland(arr, i-1, j);
// 		markIsland(arr, i, j-1);
// 	}
// }

console.log(getNumberOfIslands(binaryMatrix));

function getNumberOfIslands(binaryMatrix){
	var islandCount = 0;
	for(var i = 0; i < binaryMatrix.length; i++){
		for(var j = 0; j< binaryMatrix.length; j++){
			if(binaryMatrix[i][j] === 1){
				islandCount++;
				markIsland(i, j, binaryMatrix);
			}
		}
	}

	return islandCount;
}

function markIsland(x, y, binaryMatrix) {
	if(x < 0 || x >= binaryMatrix.length || y < 0 || y >= binaryMatrix[0].length){
		return;
	}

	if(binaryMatrix[x][y] === 1){
		binaryMatrix[x][y] = '*';
		markIsland(x-1, y, binaryMatrix);
		markIsland(x+1, y, binaryMatrix);
		markIsland(x, y-1, binaryMatrix);
		markIsland(x, y+1, binaryMatrix);
	};
}
