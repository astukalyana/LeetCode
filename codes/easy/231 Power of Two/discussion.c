bool isPowerOfTwo(int n){
    if(n==1 || n==2) return 1;

    if((n%2 != 0) || (n == 0)) return 0;

    n = n / 2;
    return isPowerOfTwo(n);
}