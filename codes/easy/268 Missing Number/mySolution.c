int missingNumber(int* nums, int numsSize){
    int sum = 0;

    int len = numsSize + 1;

    for(int i = 0; i < len; i++) {
        sum += i;

        if(i < numsSize) {
            sum -= nums[i];
        }
    }

    return sum;
}