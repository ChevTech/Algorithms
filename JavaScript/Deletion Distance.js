function deletionDistance(str1, str2) {
  // your code goes here
}

/*

input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0






memo = {};

func(s1, s2) {
  for i to len(i)-1:
    for j to len(j)-1:
      if(len(s1) === 0 && len(s2) === 0) => 0
      if(len(s1) !== 0 && len(s2) === 0) => len(s1)
      if(len(s1) === 0 && len(s2) !== 0) => len(s2)  

      if(s1[i] !== s2[j]){
        min(1 + func(s1.splice(1), 1 + s2.splice(1)))
      }
}
*/

/*
[]

dog    frog
i      j

og frog
dog rog

*/

console.log(deletionDistance('dog', 'frog'));

function deletionDistance(s1, s2){
  var len1 = s1.length;
  var len2 = s2.length;

  var memo = [];
  for(var i=0; i <= len1+1; i++){
    memo[i] = [];
    for(var j=0; j <= len2+1; j++){
      memo[i][j] = 0;
    }
  }

  for(var i = 0; i <= s1.length; i++){
    for(var j = 0; j <= s2.length; j++){
      if (i === 0) {
        memo[i][j] = j;
      } else if (j === 0) {
        memo[i][j] = i;
      } else if(s1[i-1] === s2[j-1]){
        memo[i][j] = memo[i-1][j-1];
      } else {
        memo[i][j] = 1 + Math.min(memo[i-1][j], memo[i][j-1]);
      }
    }
  }

  return memo[len1][len2];
}
