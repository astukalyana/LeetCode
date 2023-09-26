bool isPerfectSquare(int num){
    long long current = 1;

    while(current * current <= num) {
        if(current * current == num) return true;

        ++current;
    }

    return false;
}