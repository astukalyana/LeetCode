int timeRequiredToBuy(int* tickets, int ticketsSize, int k){
    int count = 0;

    for(int i = 0; i < ticketsSize; i++) {
        count += fmin(tickets[k] - (k < i), tickets[i]);
    }

    return count;
}