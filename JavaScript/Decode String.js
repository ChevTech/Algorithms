function decodeString(S){
	debugger;
	var set = new Set();
	var decoded = '';

	for(var i = 0; i < S.length; i++){
		if(!set.has(i)){
			bfs(S, i);
		}
	}

	function bfs(s, i){
		set.add(i);
		var char = s[i];
		if(char === ']'){
			return;
		}

		if(char === '['){
			return bfs(s, i+1);
		}

		if(Number.isInteger(Number(char))){
			for(j=0; j < Number(char); j++){
				bfs(s, i+1);
			}
		} else {		
			decoded += char;
			bfs(s, i+1);
		}

	}
	
	return decoded;
}

/*
[0,1,2,3,
s = 'aaa'
func("3[a]2[bc]") 
         i

dfs(0) => 
	dfs(1) =>
		dfs(2) => 
			defs(3) => ret;  
	dfs(, 1) => ret
	dfs(, 1) => ret


*/

// var s = "3[a]2[bc]";
// var s = "2[abc]3[cd]ef";
var s = "3[a2[c]]";
// "aaabcbc"

console.log(decodeString(s));