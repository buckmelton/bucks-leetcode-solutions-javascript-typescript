// Leetcode 2215. Find the Difference of Two Arrays

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums1. Therefore, answer[1] = [4,6].

// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// -1000 <= nums1[i], nums2[i] <= 1000

// Pseudocode:
// Create set1 out of nums1
// Create set2 out of nums2
// For each num in nums1:
//   if num in set2:
//     remove num from set1 and set2
// Initialize result to empty array
// Create array1 from set1
// Push array1 into result
// Create array2 from set2
// Push array2 into result
// Return result

var findDifference = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  for (const num of nums1) {
    if (set1.has(num) && set2.has(num)) {
      set1.delete(num);
      set2.delete(num);
    }
  }
  let result = [];
  result.push([...set1]);
  result.push([...set2]);
  return result;
};

// Space complexity:
// Two new sets (larger one size n, smaller one size m), temp for-loop variable 1, result n + m.
// O(n + m)
//
// Time complexity:
// Creation of 2 sets: O(n + m)
// One loop over n elements: O(n)
// Creation of 2 arrays from 2 sets: O(n + m)
// =>
// O(n + m)
