/*
Leetcode 78. Subsets
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

 
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

PSEUDOCODE:
- Find all subsets
- Since all numbers are unique, we dont have to worry about testing whether there are duplicates,
  assuming we work through nums[] in succession
- Brute force:
  - Create an array to hold all the subsets, initialize to empty
  - Add empty set to array of subsets
  - Go through each number in input array
      - For each subset in subsets array
          - Create new subset adding the current number
          - And add that new subset to the array of subsets

TC: O(2**n)
SC: O(1) (for processing), O(2**n) (for return value)
*/