/*
Leetcode 1137. N-th Tribonacci Number
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:

Input: n = 25
Output: 1389537
 
Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/

/*
NOTES:
Fibonacci and its derivatives are a well-known problem recursive problem where Dynamic Programming (DP)
is useful.

PSEUDOCODE:
- Declare wrapper function with initial parameter 'n'
  - initialized empty cache for memoization
  - declare helper function
    - if solution is in cache, return it
    - if base case(s) T(0) = 0, T(1) = 1, T(2) = 1, return the base case answer
    - compute answer = helper(n-1) + helper(n-2) + helper(n-3)
    - cache answer
    - return answer
*/