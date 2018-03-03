var board = [
[5,3,0,0,7,0,0,0,0],
[6,0,0,1,9,5,0,0,0],
[0,9,8,0,0,0,0,6,0],
[8,0,0,0,6,0,0,0,3],
[4,0,0,8,0,3,0,0,1],
[7,0,0,0,2,0,0,0,6],
[0,6,0,0,0,0,2,8,0],
[0,0,0,4,1,9,0,0,5],
[0,0,0,0,8,0,0,7,9],
];

console.log(checker(board));

function checker(board) {
	var rows = true;
	var column = true;
	var box3By3 = true;

	for(var i = 0; i < board.length; i++){
		if(checkRow(board, i)){
			for(var j = 0; j < board[0].length; j++){
				if(checkColumn(board, j)){
					if((i === 0 || i === 3 || i === 6 ) && (j === 0 || j === 3 || j === 6)){
						if(check3By3(board, i, j)){
							continue;
						} else {
							return false;
						}
					}
				} else {
					return false;
				}
			}
		} else {
			return false;
		}
	}

	return true;
}

function checkRow(board, i){
	var set = new Set();
	for(var j = 0; j < board[0].length; j++){
		var num = board[i][j];
		if(num === 0) { continue; }
		if(set.has(num)){
			return false;
		} else {
			set.add(num);
		}
	}
	return true;
}

function checkColumn(board, j){
	var set = new Set();

	for(var i = 0; i < board.length; i++){
		if(board[i][j] === 0){ continue; }
		if(set.has(board[i][j])){
			return false;
		} else {
			set.add(board[i][j]);
		}
	}
	return true;
}

function check3By3(board, i, j){
	var set = new Set();
	for(var x = i; x < i+3; x++){
		for(var y = j; y < j+3; y++){
			if(board[x][y] === 0){ continue; }
			if(set.has(board[x][y])){
				return false;
			} else {
				set.add(board[x][y]);
			}
		}
	}

	return true;
}