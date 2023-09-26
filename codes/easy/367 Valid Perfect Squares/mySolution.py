class Solution(object):
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        current = 1

        while(current*current <= num):
            if(current*current == num):
                return True
            
            current += 1
        

        return False