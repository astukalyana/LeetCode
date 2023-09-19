class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maximum = 0
        count = 0

        for i in nums:
            if(i == 1):
                count += 1
                if(count > maximum):
                    maximum = count
            else:
                count = 0

        return maximum