/**
 Notes:

 This is defined as a two-pointer problem.
 
 If I simply start with pointers
 at the end and beginning, and swap when I encounter a 0 in the left pointer
 until it meets the right pointer, then the non-zero numbers will be out of
 order.  In fact, they may be in reverse order and unreversing them will
 incur additional O(n) complexity. (Perhaps not unacceptable.)
 
 Another option
 is to start from the left and when a zero is encountered, remove it from the
 array and append it to the end of the array.  However, the requirements
 state "you must do this in-place without making a copy of the array" which
 is a bit ambiguous because, while it doesn't make a *copy* of the array,
 it doesn't do it *exactly* in place, but removes and adds elements to the
 array.
 
 Also, this second strategy doesn't involve two pointers, and this
 problem is specifically categorized as two pointer.
 
 Hmm.  OK, I *think* I have it.  We have a slow pointer and a fast pointer.  No,
 we have a zeroes search pointer and a non-zeroes search pointer, The zeroes
 pointer starts at the left.  When it encounters a zero, it stops.  Then the
 non-zeroes pointer starts one position to the right of the current position
 of the zeroes pointer (since the zeroes pointer has reached this point, we
 know that everything to the left of it are non-zeroes and already in-order,
 so we don't need to look to the left of the zero).  We then swap the zero and
 the non-zero.  The zeroes search pointer then increments by one to continue
 searching for zeroes.

 The same strategy explained another way:  Imagine we are looking to slide all
 the non-zero numbers to the left, filling in all the zeroes (and moving the
 zeroes to the end).  To do this, we look for non-zero
 elements from left to right (also keeping track of the earliest zero we see via
 the zeroes search pointer) and when we encounter a non-zero, we swap it with the first
 zero we've found, and then continue from that non-zeroes search pointer spot
 looking for non-zero numbers.  Until we hit the end.

 Pseudocode:
 Initialize non-zeroes search pointer to 1st element
 Initialize zeroes search pointer to 1st element
 While non-zeroes search pointer isn't pointing at a zero and nzsp hasn't gone off the right end of the array
   Increment non-zero search pointer
 Assert: nzsp is pointing to a non-zero OR nzsp has gone past end of array
 If nzsp has gone off end of array, there are no more non-zeroes to slide, RETURN.
 While zeroes search pointer isn't pointing to a zero and zsp hasn't gone off the right end of the
   Increment zero search pointer
 Assert: zsp is pointing to a zero OR zsp has gone past end of array
 If nzsp has fone off right end of array, there aren't any more zeroes that
 can be slid right, RETURN.

  */
function moveZeroes(nums: number[]): void {
    
};