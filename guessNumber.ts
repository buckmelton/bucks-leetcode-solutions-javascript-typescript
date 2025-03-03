/*

Leetcode 374: Guess Number Higher or Lower

We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:
-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1
Example 3:

Input: n = 2, pick = 1
Output: 1
 
Constraints:

1 <= n <= 2**31 - 1
1 <= pick <= n

*/

/*
BUCK'S NOTES:
We start by guessing the midpoint of the range between 1 (beginning of range)
and n (end of range).
If we get 0, we guessed correctly and are done.  If we get -1, our guess was
lower than the answer, so we can make our guess the new beginning of range.
If we get 1, our guess was higher than the answer, so. we can make our guess
the new end of range.
We keep guessing the midpoint and adjusting our range.  Worst case, the range
will eventually be 1 number, which necessarily must be the answer.
*/


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  let lowVal: number = 1;
  let highVal: number = n;
  let myGuess: number = n;
  let myGuessResult: number = undefined;

  if (guess(n) === 0) { return n }

  while (lowVal <= highVal) {
    myGuess = (Math.floor((highVal - lowVal) / 2)) + lowVal;
    myGuessResult = guess(myGuess);
    if (myGuessResult === 0) {
      return myGuess;
    }
    if (myGuessResult === -1) {
      highVal = myGuess;
    } else {
      if (myGuessResult === 1) {
        lowVal = myGuess;
      }
    }
  }
  
};


/*
COMPLEXITY ANALYSIS:
SPACE: O(1).  We only need space for a few local variables tracking the range and guesses.
TIME: O(log(2)n): This is a binary search, so the search space is halved each time.
*/