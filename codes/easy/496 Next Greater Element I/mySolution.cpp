class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        vector<int> result;

        for(int i = 0; i < nums1.size(); ++i) {
            int current = nums1[i];
            int greater = 0;
            bool lever = false;

            for(int j = 0; j < nums2.size(); ++j) {
                if(nums2[j] == current) {
                    lever = true;
                    continue;
                }

                if(lever && (nums2[j] > current)) {
                    greater = nums2[j];
                    break;
                }
            }

            if(greater) {
                result.push_back(greater);
            } else {
                result.push_back(-1);
            }
        }

        return result;
    }
};