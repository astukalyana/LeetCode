class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        count = 0

        for i in range(len(tickets)):
            count += min(tickets[k] - (k < i), tickets[i])
        
        return count