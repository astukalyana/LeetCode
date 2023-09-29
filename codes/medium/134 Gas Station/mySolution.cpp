class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int total_diff = 0;
        int diff = 0;
        int begin = 0;


        for(int i = 0; i < gas.size(); i++) {
            total_diff += gas[i] - cost[i];
            diff += gas[i] - cost[i];

            if(diff < 0) {
                begin = i + 1;
                diff = 0;
            }
        }

        return total_diff < 0? -1: begin;
    }
};