class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if(x < 0):
            return False

        reversed = 0
        temp = x

        while(temp != 0):
            last = temp % 10
            reversed = reversed * 10 + last
            temp /= 10

        return reversed == x
