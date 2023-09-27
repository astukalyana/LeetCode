class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        result = []

        for i in range(left, right+1):
            temp = i

            while(temp > 0):
                if(temp % 10 == 0 or i % (temp % 10) != 0):
                    break
                temp = math.floor(temp / 10)
            
            if(temp == 0):
                result.append(i)
        
        return result