/*

LeetCode 11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 
Constraints:
n == height.length
2 <= n <= 10**5
0 <= height[i] <= 10**4

MY NOTES:
Method 1 (Naive brute force implementation):
Create an n x n matrix M where each element of the matrix M[i][j] is the area for line i and line j: (j-i)*min(height[i],height[j]).
Only half the matrix needs to be filled out, since it's symmetrical.  That is, compute only the values where j > i
Return the maximum value from this matrix.

*/

var maxArea = function(height) {
    
};