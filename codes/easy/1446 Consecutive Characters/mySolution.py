class Solution:
    def maxPower(self, s: str) -> int:
        maxx = 1
        count = 1

        for i in range(len(s) - 1):
            if(s[i] == s[i+1]):
                count += 1
                if(count > maxx):
                    maxx = count
            else:
                count = 1


        return maxx