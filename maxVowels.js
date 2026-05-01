// Leetcode 1456. Maximum Number of Vowels in a Substring of Given Length
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
  
// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
  
// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
 
// Constraints:

// 1 <= s.length <= 10^5
// s consists of lowercase English letters.
// 1 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Idea: 
// Two pointers, left and right.  Move right the length k of the window, count the vowels
// and init maxVowels and curVowels with that count.  While maxVowels < k and right
// hasn't reached end of string, move left and right together and.  If left was vowel,
// subtract 1 from curVowels.  If new right is vowel, add one to curVowels. If curVowels >
// maxVowels, maxVowels = curVowels
var maxVowels = function(s, k) {
  let maxVowels = 0;
  let l = 0;
  let r = 0;
  while (r < k) {
    if (/[aeiou]/.test(s[r])) {
      maxVowels++;
    }
    r++
  }
  let curVowels = maxVowels;
  r--;
  while (r < s.length-1 && maxVowels < k) {
    if (/[aeiou]/.test(s[l])) {
      curVowels--;
    }
    l++;
    r++;
    if (/[aeiou]/.test(s[r])) {
      curVowels++;
    }
    if (curVowels > maxVowels) {
      maxVowels = curVowels;
    }
  }
  return maxVowels;
};

/*
Time complexity:
We go through each of the first k characters, and then through each of the remaining letters, so
O(n)

Space complexity:
We only keep 2 tracking integers and 2 window pointer indices => O(1)
*/
