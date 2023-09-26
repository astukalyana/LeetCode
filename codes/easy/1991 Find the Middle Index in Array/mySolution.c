int pivotIndex(int* nums, int numsSize){
    int left = 0;
    int right = 0;

    for(int i = 0; i < numsSize; i++) {
        right += nums[i];
    }

    for(int i = 0; i < numsSize; i++) {
        if(i > 0) left += nums[i - 1];
        right -= nums[i];

        if(left == right) return i;
    }

    return -1;
} 