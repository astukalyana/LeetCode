class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        maxim = 0
        current = 0

        for i in gain:
            current += i
            if(current > maxim):
                maxim = current
            

        return maxim