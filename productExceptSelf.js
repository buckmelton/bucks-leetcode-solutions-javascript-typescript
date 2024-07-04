// Leetcode 238. Product of Array Except Self
// -
// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].
// -
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// -
// You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function(nums) {
    // Strategy:
    //
    // To achieve O(n) time, have to get tricky.  (The naive / brute force
    // approach will yield O(n**2) time.)
    //
    // Create two arrays, the "left product" array leftProd and
    // "right product" array rightProd.
    //
    // For each nums[i] in the input array, leftProd[i] is the product of all nums[]
    // to the left of nums[i], rightProd is the product of all nums[] to the right of
    // nums[i].
    //
    // In one loop, fill in leftProd starting from the beginning of nums[i] one at
    // time, and fill in rightProd from the end of nums[i] one at a time.  Once both
    // leftProd and rightProd are populated, go back through and compute each 
    // prodExceptSelf.

    let leftProds = [1];
    let rightProds = [];
    rightProds[nums.length-1] = 1;
    for (let i = 1, j = nums.length-2; i < nums.length; i++, j--) {
        leftProds[i] = leftProds[i-1] * nums[i-1];
        rightProds[j] = rightProds[j+1] * nums[j+1];
    }

    let prodsExceptSelf = [];
    for (let i = 0; i <= nums.length - 1; i++) {
        prodsExceptSelf[i] = leftProds[i] * rightProds[i];
    }
    
    return prodsExceptSelf;
};