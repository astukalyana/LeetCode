class Solution {
public:
    int missingNumber(vector<int>& nums) {
       int sum = 0;
       int length = nums.size() + 1;

       for(int i = 0; i < length; i++) {
           sum += i;

           if(i < nums.size()) {
               sum -= nums[i];
           }
       }

       return sum;
    }
};