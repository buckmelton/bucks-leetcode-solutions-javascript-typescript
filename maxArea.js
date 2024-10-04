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

Method 2:
This is specifically labelled as a two-pointer problem.  So obviously there must be some way to take advantage of two pointers
moving along the n vertical lines.
Initialize maxArea to 0
Initialize pointer 1 p1 to 0, pointer 2 p2 to 1.
While p2 not past end
  If area between p1 and p2 > maxArea, set maxArea to this area
  If p2 is taller than p1, increment p1 and p2
  Else if p2 is shorter or equal to p1, increment p2
end loop
If area between p1 and p2 > maxArea, set maxArea to this area
Return maxArea

Question: Do we have 2 pointers that never pass each other?  Or do we have a short pointer and a tall pointer that may leapfrog each other?


*/

var maxArea = function(height) {
    
};