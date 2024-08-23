/**
 Notes:

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

};