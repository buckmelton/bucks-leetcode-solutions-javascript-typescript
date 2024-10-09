/*

Leetcode 1679. Max Number of K-Sum Pairs

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 10**5
1 <= nums[i] <= 10**9
1 <= k <= 10**9

MY NOTES & OBSERVATIONS:
- Once a number is removed, it is no longer available for creating a sum.
- There is no prohibition against sorting, and sorting will not affect
  the existence of pairs, since ordering has no effect on the presence
  of pairs.
- We can sort the array and and start one pointer at the left (lowest) end,
  and one pointer at the right (highest) end.  If the sum of the left
  pointer and right pointer exceeds the target sum k, we can move the right
  pointer one to the left, since we know there can never be a smaller
  sum involving this rightmost number, and so the target sum will never
  involve this rightmost number.
- If the sum of the left and right is less than the target sum k, we can
  move the left pointer one to the right, since we know there will never be
  a lesser sum and so the target sum will never involve the leftmost
  number.
- If the sum of the left and right equals the target k, move both left and
  right pointer inward, increment the number of operations, and delete the
  leftmost and rightmost numbers.
- In fact, there's no prohibition on deleting non-involved numbers from the array,
  so we don't really need pointers at all, we can just delete the numbers at
  the ends of the array instead of "moving pointers"; the pointers are always
  implicitly the beginning and end of the array.

PSEUDOCODE:
- Init numOperations to 0
- Sort array
- While array length >= 2
-   If first element + last element = target
-     Increment numOperations
-     Delete first element
-     Delete last element
-   Else
-     If first element + last element < target
-       Delete first element
-     Else // first element + last element > target
-       Delete last element
- Return numOperations

*/

function maxOperations(nums: number[], k: number): number {
  let maxOperations: number = 0;
  let sum: number;
  nums.sort((a,b) => a - b);
  while (nums.length >= 2) {
    sum = nums[0] + nums[nums.length-1];
    if (sum == k) {
      maxOperations++;
      nums = nums.slice(1,nums.length-1);
    } else {
      if (sum < k) {
        nums = nums.slice(1);
      } else { // sum > k
        nums = nums.slice(0, nums.length-2);
      }
    }
  }
  return maxOperations;
};