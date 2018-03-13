package com.chevtech;

import java.util.HashMap;
import java.util.Map;

public class getShortestUniqueSubstring {
    /*
        Smallest Substring of All Characters
        Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

        Come up with an asymptotically optimal solution and analyze the time and space complexities.

        Example:

        input:  arr = ['x','y','z'], str = "xyyzyzyx"

        output: "zyx"
    */
     static String getShortestUniqueSubstring(char[] arr, String str) {
        int arrLen = arr.length;
        int sLen = str.length();

        if(arrLen == 0 || sLen == 0 || sLen < arrLen) return "";

        Map<Character, Integer> chars = new HashMap<>();

        for(int i=0; i < arrLen; i++){ chars.put(arr[i], 0); }

        int l = 0;
        int r = 0;
        int count = 0;
        String result = "";

        while(r < sLen){
            char ch = str.charAt(r);
            if(chars.containsKey(ch)){
                chars.put(ch, chars.get(ch) + 1);
                if(chars.get(ch) == 1) count++;
            }

            r++;

            while(count == arrLen) {
                int newLen = r - l;

                if(newLen == arrLen){
                    return str.substring(l, r);
                }

                if(result == "" || newLen < result.length()){
                    result = str.substring(l, r);
                }

                char headChar = str.charAt(l);
                if(chars.containsKey(headChar)) {
                    chars.put(headChar, chars.get(headChar) - 1);
                    if (chars.get(headChar) == 0) count--;
                }

                l++;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        char[] arr = new char[]{'x','y','z'};
        String str = "xyyzyzyx";

        System.out.println(getShortestUniqueSubstring(arr, str));
    }
}
