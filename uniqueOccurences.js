// Leetcode 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

// Pseudocode:
// Initialize empty hash (object)
// For each num in arr:
//   if num is not key in hash:
//     create element where key is num and value is 0
//   increment value of element with key num
// uniqueValsCount = num of hash elements
// Create valueSet from object element values
// Return valueSet.size == uniqueValsCount

var uniqueOccurrences = function(arr) {
  let freqs = {};
  for (const num of arr) {
    if (!(num in freqs)) {
      freqs[num] = 0;
    }
    freqs[num] = freqs[num] + 1;
  }
  console.log(freqs);
  let freqVals = Object.values(freqs);
  let uniqueArrValCount = freqVals.length;
  let valSet = new Set(freqVals);
  return uniqueArrValCount == valSet.size;
};
