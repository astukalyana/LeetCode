class Solution {
public:
    vector<int> selfDividingNumbers(int left, int right) {
        vector<int> result;
        
        for(int i = left, temp = 0; i <= right; i++) {
            for(temp = i; temp > 0; temp /= 10) {
                if(temp % 10 == 0 || i % (temp % 10) != 0) break;
            }

            if(!temp) result.push_back(i);
        }
        return result;
    }
};