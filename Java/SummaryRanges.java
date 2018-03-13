class Solution {
    public List<String> summaryRanges(int[] nums) {
        int n = nums.length;
        ArrayList<String> res = new ArrayList<String>();
        if(n == 0) return res;

        int start = nums[0];
        int end = nums[0];
        for(int i=1; i < n; i++){
            int ptr = nums[i];

            if(ptr - nums[i-1] == 1){
                end = nums[i];
                continue;
            }

            res.add(toString(start, end));
            start = nums[i];
            end = nums[i];
        }

        res.add(toString(start, end));
        return res;
    }

    public String toString(int a, int b){
        StringBuilder sb = new StringBuilder();

        if(a == b){
            sb.append(a);
        } else {
            sb.append(a);
            sb.append("->");
            sb.append(b);
        }

        return sb.toString();
    }
}