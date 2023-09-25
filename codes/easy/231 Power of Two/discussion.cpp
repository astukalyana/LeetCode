class Solution {
public:
    bool isPowerOfTwo(int n) {
        if(n==2 or n==1) return 1;
        if(n%2!=0 or n==0) return 0;
        n=n/2;
        return isPowerOfTwo(n);
    }
};