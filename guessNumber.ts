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
We are only given one function signature.  But we
have to return one thing, the number that was picked.
But we have to make multiple guesses without knowing
the guess, meaning we need the function to return multiple
times.  This means the function must be recursive, it must
call itself multiple times.  Which makes sense with a binary
search problem.
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

};