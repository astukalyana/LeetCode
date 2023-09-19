class Solution {
public:
    bool canJump(vector<int>& nums) {
        if(nums.size() == 1) return true;

        int jump = 0;

        for(int i = 0; i < nums.size() - 1; ++i) {
            jump--;

            if(nums[i] > jump) {
                jump = nums[i];
            }

            if(jump == 0) return false;
        }

        return true;
    }
};