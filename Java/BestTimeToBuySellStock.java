class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        if(n < 2) return 0;

        int buy = -prices[0];
        int rest = 0;
        int sell = Integer.MIN_VALUE;

        for(int i=1; i < n; i++){
            int tmp = buy;
            buy = Math.max(buy, rest - prices[i]);
            rest = Math.max(sell, rest);
            sell = tmp + prices[i];
        }

        return Math.max(buy, Math.max(sell, rest));
    }
}