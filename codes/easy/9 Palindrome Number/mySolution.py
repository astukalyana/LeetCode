class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """

        result = str(x)
        left = 0
        right = len(result) - 1

        while(left < right):
            if(result[left] != result[right]):
                return False
            left += 1
            right -= 1

        return True
        