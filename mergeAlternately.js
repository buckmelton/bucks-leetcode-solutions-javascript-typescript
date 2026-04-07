// Leetcode 1768. Merge Strings Alternately
// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1, word2) {
  result = "";
  let maxLen = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < word1.length) {
      result += word1[i];
    }
    if (i < word2.length) {
      result += word2[i];
    }
  }
  return result;
};
