// Leetcode 345. Reverse Vowels of a String
// Solved
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Buck's Solution:

// Pseudocode:
// Create result string as copy of input string s
// Use two pointers into string s, ptr1 and ptr2
// ptr1 starts at index 0 of string, ptr2 starts at last index of string
// As long as ptr1 is less than ptr2
//   As long as ptr1 doesn't point to a vowel and is less than ptr2
//     increment ptr1 by one
//   As long as ptr2 doesn't point to a vowel and is greater than ptr1
//     decrement ptr1
//   Assert: either ptr1 == ptr2
//             in which case exit loop and return result string
//           or ptr1 and ptr2 both point to a vowel
//             in which case swap the vowels, increment ptr1, and decrement ptr2
// return result string

function reverseVowels(s: string): string {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let ptr1: number = 0;
    let ptr2: number = s.length-1;
    while (ptr1 < ptr2) {
        while (!vowels.includes(s[ptr1]) && (ptr1 < ptr2)) {
            ptr1++;
        }
        while (!vowels.includes(s[ptr2]) && (ptr1 < ptr2)) {
            ptr2--;
        }
        if (ptr1 == ptr2) {
            break;
        }
        s = s.substr(0,ptr1) + s[ptr2] + s.substr(ptr1+1,ptr2-ptr1-1) + s[ptr1] + s.substr(ptr2+1);
        ptr1++;
        ptr2--;
    }
    return s;
};