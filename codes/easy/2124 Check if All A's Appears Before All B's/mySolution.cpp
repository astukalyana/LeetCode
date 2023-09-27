class Solution {
public:
    bool checkString(string s) {
        bool flag = false;

        for(int i = 0; i < s.size(); i++) {
            if(s[i] == 'b') {
                if(!flag) flag = !flag;
            } else {
                if(flag) return false;
            }
        }

        return true;
    }
};