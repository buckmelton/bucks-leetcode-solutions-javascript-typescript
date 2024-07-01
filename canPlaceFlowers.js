// Leetcode 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.



// Buck's Solution:
// The general case is that a stretch of 3 empty plots allows one flower, with an additional flower
// for every additional 2 empty plots in that same stretch.

// Keep a counter of empty adjacent plots.  When we reach the end of a local stretch of adjacent plots,
// compute how many flowers can fit and reset the counter to zero.

// The beginning and end of the array are special cases, since a stretch of 2 empty
// plots will allow for a flower (hence initializing local_run to 1 at the beginning, and omitting the
// "- 1" at the end for the integer division computation).

// The end of the array is also a special case since we've exited the loop but still
// may need to compute if 
var canPlaceFlowers = function(flowerbed, n) {
    let totalPossiblePlots = 0;
    let localRunOfEmptyPlots = 1;
    flowerbed.forEach((flower_present) => {
        if (flower_present) {
            if (localRunOfEmptyPlots >= 3) {
                totalPossiblePlots += (localRunOfEmptyPlots - 1) / 2;
            };
            localRunOfEmptyPlots = 0;
        } else {
            localRunOfEmptyPlots++;
        }
    });
    if (localRunOfEmptyPlots >= 2) {
        totalPossiblePlots += localRunOfEmptyPlots / 2;
    };
    return totalPossiblePlots >= n;
};