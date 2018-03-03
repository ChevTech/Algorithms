function getAllAnagrams(s1, s2){
    debugger;
    var list = [];
    if (s1 === null || s1.length === 0 || s2 === null || s2.length === 0) return list;
    
    var map = s2.split('').reduce((res, char) => {
        res[char] = res[char] ? res[char] + 1 : 1;
        return res;
    }, {});

    //two points, initialize count to p's length
    var left = 0, right = 0, count = s2.length;
    
    while (right < s1.length) {
        //move right everytime, if the character exists in p's map, decrease the count
        //current map value >= 1 means the character is existing in p
        if (map[s1[right]] >= 1) {
            count--;   
        }
        map[s1[right]]--;
        right++;
        
        //when the count is down to 0, means we found the right anagram
        //then add window's left to result list
        if (count === 0) {
            list.push(left);
        }
        //if we find the window's size equals to p, then we have to move left (narrow the window) to find the new match window
        //++ to reset the map because we kicked out the left
        //only increase the count if the character is in p
        //the count >= 0 indicate it was original in the map, cuz it won't go below 0
        if (right - left === s2.length) {
           
            if(map[s1[left]] >= 0) {
                count++;
            }
            map[s1[left]]++;
            left++;
        }
    }
        return list;
}


console.log(getAllAnagrams("cbaebabacd", "abc"));
// console.log(getAllAnagrams("abab", "ab"));