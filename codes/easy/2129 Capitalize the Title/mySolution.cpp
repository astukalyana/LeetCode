class Solution {
public:
    string capitalizeTitle(string title) {
        bool flag = true;
        int begin = 0;
        int count = 0;
        for(int i = 0; i < title.size(); i++) {
            if(flag) {
                begin = i;
                flag = false;
                count = 0;
            }

            if(title[i] == ' ') flag = true;
            else count++;
            
            title[i] = tolower(title[i]);
            if(count > 2) title[begin] = toupper(title[begin]);

        }

        return title;
    }
};