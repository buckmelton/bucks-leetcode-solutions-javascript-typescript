/*
Leetcode 9. Palindrome Number
Given an integer x, return true if x is a  palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-2**31 <= x <= 2**31 - 1
*/

/*
PSEUDOCODE:

This is pretty straightforward and palindrome detection is a
well-trodden problem.

Two-pointer solution.  The solution really has nothing to
do with the numeric aspects of the input, it has only to
do with the characters that make up the input, and so we'll
treat this as an array of characters, or a string.  Since the problem
statement explicitly includes the negative sign as part of the input to
be considered as a palindrome, we don't need to special case it (e.g.
discard it). In fact, if we knew that many of the inputs were negative
numbers, we could save the tiniest bit of space by inspecting the first
character and returning false if it's the '-' sign (since the last
character will never be a '-'), but this probably isn't worth it.

- Convert number to string
- Initialize left pointer to first character
- Initialized right pointer to character
- While right pointer is to the right of the left pointer
  - If left char doesn't equal right char, return false
  - Increment left pointer and decrement right pointer
- If we've exited the loop without already returning, then
  the number is a palindrome.
*/

function isPalindrome(x: number): boolean {
  let xStr: string = x.toString();
  let leftPtr: number = 0;
  let rightPtr: number = xStr.length-1;
  while (rightPtr > leftPtr) {
    if (xStr[leftPtr] !== xStr[rightPtr]) {
      return false;
    }
    leftPtr++;
    rightPtr--;
  }
  return true;
};