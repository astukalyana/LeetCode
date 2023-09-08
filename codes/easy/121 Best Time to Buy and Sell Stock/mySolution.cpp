class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int lowest =  prices[0];
        int max = 0;
        int size = prices.size();

        for(int i = 0; i < size; ++i) {
            if(prices[i] < lowest) {
                lowest = prices[i];
            }

            if(prices[i] - lowest > max ) {
                max = prices[i] - lowest;
            }
        }

        return max;
    }
};  