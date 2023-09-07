class Solution {
public:
    bool isPalindrome(int x) {
        string nums = to_string(x);

        int right = nums.size() - 1;
        int left = 0;

        while (left < right) {
            if(nums[left] != nums[right]) {
                return false;
            }

            --right;
            ++left;
        }

        return true;
    }
};