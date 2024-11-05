// Leetcode 2215. Find the Difference of Two Arrays
// Easy
// Topics
// Companies
// Hint
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// -1000 <= nums1[i], nums2[i] <= 1000

// MY OBSERVATIONS:
// The problem is specified as a hashmap or set problem.
// 
// BRUTE FORCE:
// Create set A and set B from nums1 and nums2
// For each int in set A, identify whether it's a member of set B and if so,
//   store in answer[0]
// Vice versa or set B, set A, answer[1]

// This seems to be not only "brute force" (at least in my head it is),
// but also the correct answer.
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1: Set<number> = new Set<number>(nums1);
  const set2: Set<number> = new Set<number>(nums2);
  let answer: number[][] = [ [], [] ];
  for (let int1 of set1) {
    if (!set2.has(int1)) {
      answer[0].push(int1);
    }
  }
  for (let int2 of set2) {
    if (!set1.has(int2)) {
      answer[1].push(int2)
    }
  }
  return answer;
};
