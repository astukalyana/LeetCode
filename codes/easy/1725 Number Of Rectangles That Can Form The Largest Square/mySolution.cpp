class Solution {
public:
    int countGoodRectangles(vector<vector<int>>& rectangles) {
        int count = 0;
        int current = 0;

        for(int i = 0; i < rectangles.size(); i++) {
            if(current < min(rectangles[i][0], rectangles[i][1])) {
                count = 0;
                current = min(rectangles[i][0], rectangles[i][1]);
            }

            if(min(rectangles[i][0], rectangles[i][1]) == current) count++;
        }

        return count;
    }
};