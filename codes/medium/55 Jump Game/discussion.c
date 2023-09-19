bool canJump(int* nums, int numsSize){
    int last = numsSize - 1;

    for(int i = numsSize - 1; i >= 0; --i) {
        if(nums[i] + i >= last) last = i;
    }

    return last == 0;
}