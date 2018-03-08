package Java;

public class KthSmallestElementInASortedMatrix {
    public List<String> generateParenthesis(int n) {
        if(n == 0){ return new ArrayList(); }
        return dfs(new ArrayList<String>(), new ArrayList<Character>(), n, 0, 0);
    }

    public List<String> dfs(List<String> res, ArrayList<Character> parens, int n, int open, int closed){
        if(closed == n){
            return String(parens.toArray());
        }

        if(open < n){
            res.add(dfs(res, parens.add('('), n, open + 1, closed));
        }

        if(closed < open){
            res.add(dfs(res, parens.add(')'), n, open, closed + 1));
        }

        return res;
    }
}
