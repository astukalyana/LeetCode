class Solution {
public:
    string countAndSay(int n) {
        if (n == 1) {
            return "1";
        } else {
            string str = countAndSay(n - 1);
            string result = "";

            for (int i = 0; i < str.size(); ++i) {
                if(i > 0 && str[i] == str[i - 1]) {
                    continue;
                }

                int counter = i;
                int occurences = 1;

                while(str[counter] == str[counter + 1]) {
                    counter++;
                    occurences++;
                }

                

                result += std::to_string(occurences);
                result += str[counter];
            }

            return result;
        }
    }
};