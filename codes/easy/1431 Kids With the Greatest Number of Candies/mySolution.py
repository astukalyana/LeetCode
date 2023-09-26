class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxim = 0
        result = []

        for i in candies:
            if(i > maxim):
                maxim = i
        
        for i in candies:
            result.append(i + extraCandies >= maxim)
        

        return result