function isPerfectSquare(num: number): boolean {
    let current = 1;

    while(current*current <= num) {
        if(current*current == num) return true;

        current++;
    }

    return false;
};