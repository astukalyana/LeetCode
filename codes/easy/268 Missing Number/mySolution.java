class Solution {
    public int missingNumber(int[] nums) {
        int sum = 0;

        int len = nums.length + 1;

        for(int i = 0; i < len; i++) {
            sum += i;

            if(i < nums.length) {
                sum -= nums[i];
            }
        }

        return sum;
    }
}