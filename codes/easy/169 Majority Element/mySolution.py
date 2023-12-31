class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0
        current = 0

        for i in nums:
            if(count == 0):
                current = i
            
            if(current == i):
                count += 1
            else:
                count -= 1

        return current