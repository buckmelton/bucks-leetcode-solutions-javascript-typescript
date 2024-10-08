/**

LeetCode 283: Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 
Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


 My Notes:

 This is defined as a two-pointer problem.
 
 If I simply start with pointers
 at the end and beginning, and swap when I encounter a 0 in the left pointer
 until it meets the right pointer, then the non-zero numbers will be out of
 order.  In fact, they may be in reverse order and unreversing them will
 incur additional O(n) complexity. (Perhaps not unacceptable.)
 
 Another option is to start from the left and when a zero is
 encountered, remove it from the array and append it to the end
 of the array.  However, the requirements state "you must do this
 in-place without making a copy of the array" which is a bit
 ambiguous because, while it doesn't make a *copy* of the array,
 it doesn't do it *exactly* in place, but removes and adds elements to the
 array.
 
 Also, this second strategy doesn't involve two pointers, and this
 problem is specifically categorized as two pointer.
 
 Hmm.  OK, I *think* I have it.  We have a slow pointer and a fast pointer.  No,
 we have a zeroes search pointer and a non-zeroes search pointer.  Basically,
 the zero search pointer always points to the leftmost zero (cuz that's the one
 that will be swapped), and the non zero search pointer moseys along, every time
 it finds a non zero, it swaps with the first zero and the zsp is updated to point
 to the new location of the leftmost zero.

 Pseudocode:
 Find the first zero, set zsp to this index.
 If no zeroes, RETURN
 While true
   Set nzsp to one past zsp
   Find the first non zero past the current zero
   If no more non zeroes, RETURN
   Assert: zsp points to a zero, nzsp points to a non zero, zsp is less than nzsp
   Swap the non zero and zero, reset the zsp to be where the nzsp was (i.e. where the zero is now)

  */
function moveZeroes(nums: number[]): void {
  let zeroSearchPtr: number = 0;
  let nonZeroSearchPtr: number;
  let tmp: number;
  // Find first zero
  while ((nums[zeroSearchPtr] != 0) && (zeroSearchPtr < nums.length)) {
    zeroSearchPtr++;
  }
  // If no zeroes in array, we're done
  if (zeroSearchPtr >= nums.length) {
    return;
  }
  // We've found first zero, first candidate non zero is the next element
  nonZeroSearchPtr = zeroSearchPtr + 1;
  // guaranteed to exit because nzsp is incremented every pass and will eventually
  // trigger RETURN
  while (true) {
    // find next non zero
    while ((nums[nonZeroSearchPtr] == 0) && (nonZeroSearchPtr < nums.length)) {
      nonZeroSearchPtr++;
    }
    // if no more non zeroes, we're done
    if (nonZeroSearchPtr >= nums.length) {
      return;
    }
    // Assert: zsp points to leftmost zero, nzsp points to next non zero
    // Swap them, the leftmost zero is now pushed forward by one
    tmp = nums[zeroSearchPtr];
    nums[zeroSearchPtr] = nums[nonZeroSearchPtr];
    nums[nonZeroSearchPtr] = tmp;
    zeroSearchPtr++;
  }
};

function myLog(location: string, zsp: number, nzsp: number, nums: number[]) {
  console.log(`***********`);
  console.log(`location: ${location}`);
  console.log(`zsp: ${zsp}, nzsp: ${nzsp}, nums: ${nums}`);
};