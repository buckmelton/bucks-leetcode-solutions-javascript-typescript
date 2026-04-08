// Leetcode 643. Maximum Average Subarray I
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000
 
// Constraints:
// n == nums.length
// 1 <= k <= n <= 10^5
// -10^4 <= nums[i] <= 10^4

// Pseudocode:
// (We are assured there are at least k elements in the arr)
// Init cur sum to sum of first k elements
// Init max sum to cur sum
// Init window start index to 1
// While window start index <= arr length - k:
//   Subtract window start index - 1 from cur sum
//   Add window start index + k - 1 to cur sum
//   If cur sum > max sum:
//     Replace max sum with cur sum
//   Increment window start index
// Return max sum / k

var findMaxAverage = function(nums, k) {
  let curSum = 0;
  for (let i = 0; i < k; i++) {
    curSum += nums[i];
  }
  let maxSum = curSum;
  let winStart = 1;
  while (winStart <= nums.length - k) {
    curSum -= nums[winStart - 1];
    curSum += nums[winStart + k - 1];
    if (curSum > maxSum) {
      maxSum = curSum;
    }
    winStart++;
  }
  return maxSum / k;
};
