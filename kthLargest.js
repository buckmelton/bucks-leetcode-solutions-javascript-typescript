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
We've been told this is a heap problem. Push all the elements on a MIN heap, but
pop from the heap when it exceeds size k. Since we've limited the minheap size to k,
once all the values have been processed, by definition we'll have the k largest items
on the heap, and the kth largest will be at the root.

PSEUDOCODE:
- Initialize min heap as array
- For each element in the array
  - Insert the element in the max heap
  - If the heap size > k, pop the root to keep heap size k
- Return root, which will be the min of the k largest elements,
  i.e. the kth largest element

PSEUDOCODE FOR INSERT:
- Push value onto end of heap
- While value is less than parent
  - Swap value and parent

PSEUDOCODE FOR EXTRACT:
- Save value at root
- Move last value in array to root
- Make root curValue
- While curValue > curValue child1 or curValue > curVaue child2
  - swap
*/

