class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if(n < 0):
            return False
        temp = 1

        while(temp <= n):
            if(temp == n):
                return True
            
            temp *= 2
        
        return False
