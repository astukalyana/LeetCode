class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int lowest =  prices[0];
        int max_profit = 0;
        int size = prices.size();

        for(int i = 0; i < size; ++i) {
            lowest = min(lowest, prices[i]);
            max_profit = max(max_profit, prices[i] - lowest);
        }

        return max_profit;
    }
};