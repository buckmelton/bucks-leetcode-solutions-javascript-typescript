// Leetcode 27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElement(nums: number[], val: number): number {
    for (let i:number=0; i<nums.length;) {
        if (nums[i] == val) {
            nums.splice(i,1);
        } else {
            i++
        }
    }
    return nums.length
};