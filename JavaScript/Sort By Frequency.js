/*
Input:
"tree"
Output:
"eert"

Bucket Sort (26 possible buckets)

O(n) to create buckets

{
	t: 1,
	r: 1,
	e: 2
}

O(n) to sort buckets

[ [], [], [] ] char 0 -> char n;
   0,  1,  2 

Solution: TIme: O(n)? Space: O(n)

*/

console.log(sortByFreq('Aabb'));

function sortByFreq(s) {
	var buckets = {};

	// Time O(n), Space O(n)
	for(var i=0; i < s.length; i++){
		var char = s[i];
		if (!buckets[char]){
			buckets[char] = 1;
		} else {
			buckets[char] += 1;
		}
	}

	var chars = Object.keys(buckets);
	var sorted = [];

	// Time O(n) Space O(n)
	for(var j=0; j < chars.length; j++){
		var char = chars[j];
		var freq = buckets[char];

		if(!sorted[freq]){
			var set = new Set();
			set.add(char);
			sorted[freq] = set;
		} else {
			sorted[freq].add(char);
		}
	}

	var output = '';

	// Time O(n) Space O(1)
	for(var x=sorted.length-1; x >= 0; x--){
		if(!sorted[x]){ continue; }

		var set = sorted[x];
		set.forEach((char) => {
			for(var y=0; y < x; y++){
				output += char;
			}
		})
	}

	return output;
}

