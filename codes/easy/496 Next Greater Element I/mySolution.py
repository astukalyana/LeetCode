class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []

        for i in nums1:
            greater = -1
            lever = False

            for j in nums2:
                if(i == j):
                    lever = True
                    continue
                
                if(lever and (j > i)):
                    greater = j
                    break

            if(lever):
                result.append(greater)
            else:
                result.append(-1)
        
        return result