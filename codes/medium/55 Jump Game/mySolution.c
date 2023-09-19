bool canJump(int* nums, int numsSize){
    int jump = 0;

    for(int i = 0; i < numsSize - 1; ++i) {
        jump--;

        if(nums[i] > jump) jump = nums[i];

        if(jump == 0) return false;
    }

    return true;
}