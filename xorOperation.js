// Leetcode 1486: XOR Operation in an Array
var xorOperation = function(n, start) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(start + 2 * i);
  }
  return nums.reduce( (acc, cur) => acc ^ cur, 0);
};