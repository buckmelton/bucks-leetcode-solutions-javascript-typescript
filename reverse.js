/*
Leetcode 7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 
Constraints:
-231 <= x <= 231 - 1

PSEUDOCODE:
Convert integer to string
Strip and store negative
Strip trailing zeros
Reverse string
If string is less than largest 32-bit negative integer or greater
than largest 32-bit positive integer, return 0
Return string

*/

var isOutOfRange = function(str, isNegative) {
  /* From the constraints, we can't store an out of range integer,
  so, we can't create out of range ints variables to compare to
  each other, we have to resort to checking each digit character.
  Assuming we've already taken care of stripping leading zeroes,
  We can begin by excluding any numbers that aren't 10 digits long:
  any number with greater than 10 digits is automatically out of range,
  and any number with less than 10 digits is automatically in range.
  For numbers with 10 digits, we compare each digit.  The moment we find
  a digit that is greater than the corresponding digit of the max, we can
  exit with 'true' (out of range), and the moment we find a digit that is
  less than the corresponding digit of the max, we can exit with 'false'
  (in range). The last digit is special-cased since it could be either 7
  or 8 depending on whether we're looking at a negative or a positive
  number.
  If we loop through all the digits without exiting, return false
  (reversed number is in range.)
  */
  const MAX_POS_32_BIT_INT = 2147483648;
  const MAX_POS_32_BIT_INT_STR = MAX_POS_32_BIT_INT.toString();
  const MIN_NEG_32_BIT_INT = 2147483647;
  const MIN_NEG_32_BIT_INT_STR = MIN_NEG_32_BIT_INT.toString();
  if (str.length < 10) {
    return false;
  } else {
    if (str.length > 10) {
      return true;
    } else {
      for (let i = 0; i <= str.length-2; i++) {
        if (parseInt(str[i]) > parseInt(MAX_POS_32_BIT_INT_STR[i])) {
          return true;
        }
        if (parseInt(str[i]) < parseInt(MAX_POS_32_BIT_INT_STR[i])) {
          return false;
        }
      }
      if (!isNegative && parseInt(str[str.length-1]) > 8) {
        return true;
      } else {
        if (isNegative && (parseInt(str[str.length-1]) > 7)) {
          return true;
        }
      }
    }
    return false;
  }
}

var removeTrailingZeroes = function(xStr) {
  while (xStr.length > 0 && (xStr[xStr.length-1] === '0')) {
    xStr = xStr.slice(0,-1);
  }
  return xStr;
}
 
var reverse = function(x) {
  // Convert integer to string
  let xStr = x.toString();

  // Strip and store negative
  let isNegative = false;
  if (xStr[0] === '-') {
    isNegative = true;
    xStr = xStr.slice(1);
  }

  // Strip trailing zeroes
  xStr = removeTrailingZeroes(xStr);

  if (xStr.length == 0) return 0;

  xStr = xStr.split("").reverse().join("");
  if (isOutOfRange(xStr, isNegative)) {
    return 0;
  } else {
    if (isNegative) {
      xStr = '-' + xStr;
    }
    return parseInt(xStr);
  }
};