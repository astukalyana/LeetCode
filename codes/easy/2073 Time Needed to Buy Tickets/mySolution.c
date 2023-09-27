int timeRequiredToBuy(int* tickets, int ticketsSize, int k){
    int count = 0;
    int current = 0; 

    while(tickets[k] > 0) {
        if(tickets[current] > 0) {
            count++;
            tickets[current]--;
        }

        current++;
        if(current == ticketsSize) current = 0;
    }

    return count;
}