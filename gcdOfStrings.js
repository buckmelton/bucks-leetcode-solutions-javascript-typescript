// Leetcode 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Idea:
// Start with the shorter word as the gcd candidate
// For length of gcd candidate to 1:
//   If the length of the gcd candidate evenly divides both words:
//     If doing a global replace on both words with gcd candidate results in empty strings for both:
//       Return gcd candidate
//     Else:
//       Remove last letter of gcd candidate
// Return false

var gcdOfStrings = function(str1, str2) {
  let gcdCandidate = ( str1.length <= str2.length ) ? `${str1}` : `${str2}`;
  let gcdLen = gcdCandidate.length
  while (gcdLen > 0) {
    if ( ( str1.length % gcdLen == 0 ) && (str2.length % gcdLen == 0 ) ) {
      if ( str1.replaceAll(gcdCandidate, "") === "" && str2.replaceAll(gcdCandidate, "") === "" ) {
        return gcdCandidate;
      }
    }
    gcdCandidate = gcdCandidate.slice(0, gcdLen - 1);
    gcdLen = gcdCandidate.length;
  }
  return "";
};
