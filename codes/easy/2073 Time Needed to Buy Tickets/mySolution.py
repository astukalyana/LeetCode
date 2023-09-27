class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        count = 0
        current = 0

        while(tickets[k] > 0):
            if(tickets[current] > 0):
                count += 1
                tickets[current] -= 1

            current += 1
            if(current == len(tickets)):
                current = 0

        return count