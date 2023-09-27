class Solution {
public:
    int timeRequiredToBuy(vector<int>& tickets, int k) {
        int count = 0;

        for(int i = 0; i < tickets.size(); i++) {
            count += min(tickets[k] - (k < i), tickets[i]);
        }

        return count;
    }
};