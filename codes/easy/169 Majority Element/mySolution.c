int majorityElement(int* nums, int numsSize){
    int count = 0;
    int current = 0;

    for(int i = 0;  i < numsSize; i++) {
        if(count == 0) current = nums[i];

        if(current == nums[i]) count++;
        else count--;
    }

    return current;
}