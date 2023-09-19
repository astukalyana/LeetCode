class Solution {
public:
    int maxPower(string s) {
        int max = 0;
        int count = 0;
        char current = s[0];

        for(int i = 0; i < s.size(); ++i) {
            if(current == s[i]) {
                count++;
                if(count > max) {
                    max = count;
                }
            } else {
                count = 1;
                current = s[i];
            }
        }

        return max;
    }
};