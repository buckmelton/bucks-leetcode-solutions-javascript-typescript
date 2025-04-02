/*

Leetcode 215: Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 
Constraints:

1 <= k <= nums.length <= 10**5
-10**4 <= nums[i] <= 10**4

*/

/*

BUCK'S NOTES/OBSERVATIONS:
We've been told this is a heap problem.
Traverse the array, and create a max heap.
Once you have the complete max heap, your
kth extraction will be the answer.

PSEUDOCODE:
- Initialize max heap as array
- For each element in the array
  - Insert the element in the max heap
- Perform k extractions
- Return the kth extraction.

PSEUDOCODE FOR INSERT:
- Push value onto end of heap
- While value is greater than parent
  - Swap value and parent

PSEUDOCODE FOR EXTRACT:
- Save value at root
- Move last value in array to root
- Make root curValue
- While curValue < curValue child1 or curValue < curVaue child2
  - swap
  
*/