class Solution {
    public boolean canJump(int[] nums) {
        int jump = 0;

        for(int i = 0; i < nums.length - 1; ++i) {
            jump--;

            jump = Math.max(jump, nums[i]);

            if(jump == 0) return false;
        }

        return true;
    }
}