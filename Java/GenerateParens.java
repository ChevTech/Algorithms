public class Generate Parens {
    public static List<String> generateParenthesis(int n) {
        if(n == 0){ return (List<String>) new ArrayList<String>(0); }
        List<String> list = new java.util.ArrayList<>();
        return dfs(list, "", n, 0, 0);
    }

    public static List<String> dfs(List<String> res, String parens, int n, int open, int closed){
        if(closed == n){
            res.add(parens);
            return res;
        }

        if(open < n){
            dfs(res, parens + '(', n, open + 1, closed);
        }

        if(closed < open){
            dfs(res, parens + ')', n, open, closed + 1);
        }

        return res;
    }
}