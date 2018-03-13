class Solution {
    public boolean isOneEditDistance(String s, String t) {
        int n = s.length();
        int m = t.length();

        for(int i=0; i < Math.min(n, m); i++){
            if(s.charAt(i) != t.charAt(i)){
                if(n == m){
                    return s.substring(i+1).equals(t.substring(i+1));
                } else if(n < m){
                    return s.substring(i).equals(t.substring(i+1));
                } else {
                    return s.substring(i+1).equals(t.substring(i));
                }
            }
        }

        return Math.abs(n-m) == 1;
    }
}