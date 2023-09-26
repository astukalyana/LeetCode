class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int maxim = 0;
        vector<bool> result;

        for (int i = 0; i < candies.size(); i++) {
            maxim = max(maxim, candies[i]);
        }

        for(int i = 0; i < candies.size(); i++) {
            result.push_back(candies[i] + extraCandies >= maxim);
        }

        return result;
    }
};