/*
Two Sum problem
Return all pairs of unique indices whose values add up to a target sum.

Example 1:
Input: [1, 5, 7, -1, 5], target= 6 
Output: [[1, 5], [-1, 7]]
Explanation: There are only two pairs that add up to 6: [1, 5] and [-1, 7].

Example 2:
Input: [1, 9, -1, 8, 6], target = 4
Output: [[]]
Explanation: No pairs add up to 4.

Example 3:
Input: [3, 5, 2, -4, 8, 11], target = 7
Output: [[11, -4], [2, 5]]
Explanation: 11 + -4 = 7 and 2 + 5 = 7

Example 4:
Input: [2,6,5,8,11], target = 14
Outpu: [1, 3] 
Explanation: arr[1] + arr[3] = 14

Example 5:
Input: [2,6,5,8,11], target = 15
Result: [-1, -1]
Explanation: There exist no such two numbers whose sum is equal to the target.
*/

/*
BUCK'S NOTES:
Use "frequency count" method with a hashtable.  Traverse the full array.
For each arr[i], check if the complement (target - arr[i]) has an entry in the hash table.
If it does, push onto the result a tuple of the current i and the value(s) in the hash table.
"Values" and not "value" because the values in the array are not guaranteed to be unique,
so there may be multiple unique pairs of indices whose values add up to the target.

E.g. [1, 1, 6], target = 7, output should be [[0,2, [1,2]], so the hashmap should be
{ 1: [0, 1], 6: [2] }

Finally, add the arr[i]: i to the hashmap, or if arr[i] is already a key, add i to its array
of values.
*/

/*
PSEUDOCODE:
- Initialize empty hashmap
- Initialize empty result array
- For each element arr[i] in input array
	- if (target - arr[i]) exists as a key in hashmap
		- for each element val[j] for key
			- push tuple [arr[i], val[j]] onto result array
	- if arr[i] exists as key in hashmap
		- add i to the key's value array
	- else add { arr[i]: i } to hashmap
- Return result
*/

const twoSum = function(arr: number[], target: number): number[][] {
const twoSum = function(arr: number[], target: number): number[][] {
  let complementIndicesMap: Map<number, number[]> = new Map();
  let result: number[][] = [];
  for (let i=0; i<arr.length; i++) {

    let compInds = complementIndicesMap.get(target - arr[i]);
    if (compInds != undefined) {
      for (let compInd of compInds) {
        if (compInd !== i) {
          result.push([compInd, i]);
        }
      }
    }

    if (complementIndicesMap.has(arr[i])) {
      let compInds2 = complementIndicesMap.get(arr[i]);
      compInds2.push(i);
      complementIndicesMap.set(arr[i], compInds2);
    } else {
      complementIndicesMap.set(arr[i], [i]);
    }

  }

  return result;
};

console.log(twoSum([1,2],3));
console.log(twoSum([1, 5, 7, -1, 5], 6));
console.log(twoSum([3, 5, 2, -4, 8, 11], 7));
console.log(twoSum([2,6,5,8,11], 14));
console.log(twoSum([2,6,5,8,11], 15));

/*
COMPLEXITY ANALYSIS:
SPACE: O(N).  O(N) for the hashmap, which has one entry for each of the N values in the input array +
  <O(N) entries in the results table.
TIME: O(N).  O(N) for traversing the N entries + <O(N) for pushing to the results array.
*/

