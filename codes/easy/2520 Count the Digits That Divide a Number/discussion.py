class Solution:
    def countDigits(self, num: int) -> int:
        count = 0
        temp = num

        while(temp > 0):
            if(num % (temp % 10) == 0):
                count+=1
            
            temp = (temp - (temp % 10)) / 10

        return count