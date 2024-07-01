// Leetcode 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if
// s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

function gcdOfStrings(str1: string, str2: string): string {
    let candidateGcdLength:number = str2.length;
    let candidateGcd:string = "";

    while (candidateGcdLength > 0) {
        if (str1.length % candidateGcdLength == 0 && str2.length % candidateGcdLength == 0) {
            candidateGcd = str2.slice(0,candidateGcdLength);
            if (str1.replaceAll(candidateGcd, "").length == 0 && str2.replaceAll(candidateGcd, "").length == 0) {
                return candidateGcd;
            }
        }
        candidateGcdLength--;
    }

    return ""
};