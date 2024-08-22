// LeetCode 443. String Compression

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

var compress = function(chars) {
  let i = 0;
  let resultLength = 0;
  while (i < chars.length) {
    console.log(`chars:`);
    console.log(chars);
    let groupLength = 1;
    while (((i + groupLength) < chars.length) && (chars[i + groupLength] === chars[i])) {
      groupLength++;
    }
    chars[resultLength] = chars[i];
    resultLength++;
    if (groupLength > 1) {
      let groupLengthAsCharArray = String(groupLength).split('');
      chars.splice(resultLength, groupLengthAsCharArray.length, ...groupLengthAsCharArray);
      resultLength += groupLengthAsCharArray.length;
    }
    i += groupLength;
  }
  return resultLength;
};