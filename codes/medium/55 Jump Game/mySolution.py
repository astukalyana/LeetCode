class Solution:
    def canJump(self, nums: List[int]) -> bool:
        jump = 0

        for i in range(len(nums) - 1):
            jump -= 1

            if(nums[i] > jump):
                jump = nums[i]

            if(jump == 0):
                return False
        
        return True