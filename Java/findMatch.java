package com.chevtech;

public class Main {

    public static void main(String[] args) {
        String text = "helloworld";
        String pattern = "world";

        System.out.println(findMatch(pattern, text));
    }

    public static int findMatch(String p, String text){
        int m = p.length();
        int n = text.length();

        for(int i=0; i <= (n-m); i++){
            int j = 0;
            while((j < m) && (text.charAt(i+j) == p.charAt(j))){
                j = j+1;
            }

            if(j == m) return i;
        }

        return -1;
    }
}