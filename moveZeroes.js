// Leetcode 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0] 

// Constraints:
// 1 <= nums.length <= 10**4
// -2**31 <= nums[i] <= 2**31 - 1

// Idea:
// Two pointers left and right, that move in from left and right end of array.
// Left pointer points to next num to look at.  Right pointer points to last number
// we need to look at
// Move zeros found by left pointer to end of array, moving the pointers inward
// as appropriate.

// Pseudocode:
// Init left ptr to index 0
// Init right ptr to last index
// Move right pointer inward past any rightmost zeros
// While left ptr <= right ptr:
//   If left ptr points to a zero:
//     Splice out zero
//     Push zero
//     Decrement right ptr
//   Else:
//     Increment left ptr

var moveZeroes = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (nums[r] == 0 ) {
    r--;
  }
  while (l <= r) {
    if (nums[l] == 0) {
      nums.splice(l,1);
      nums.push(0)
      r--;
    } else {
      l++;
    }
  }
  return nums;
};
