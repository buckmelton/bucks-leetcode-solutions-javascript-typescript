/*

Leetcode 215: Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 
Constraints:

1 <= k <= nums.length <= 10**5
-10**4 <= nums[i] <= 10**4

*/

/*

BUCK'S NOTES/OBSERVATIONS:
We've been told this is a heap problem.
Traverse the array, and create a max heap.
Once you have the complete max heap, your
kth extraction will be the answer.

PSEUDOCODE:
- Initialize max heap as array
- For each element in the array
  - Insert the element in the max heap
- Perform k extractions
- Return the kth extraction.

PSEUDOCODE FOR INSERT:
- Push value onto end of heap
- While value is greater than parent
  - Swap value and parent

PSEUDOCODE FOR EXTRACT:
- Save value at root
- Move last value in array to root
- Make root curValue
- While curValue < curValue child1 or curValue < curVaue child2
  - swap

*/

function swap(arr: number[], i: number, j: number) {
  let temp: number = undefined;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function maxHeapInsert(maxHeap: number[], num: number): void {
  maxHeap.push(num);
  let curPos: number = maxHeap.length - 1;

  while ( ( curPos > 0 ) && ( maxHeap[curPos] > maxHeap[Math.floor((curPos-1)/2)] ) ) {
    swap(maxHeap, curPos, Math.floor((curPos-1)/2));
    curPos = Math.floor((curPos-1)/2);
  }
}

function bubbleDown(maxHeap): void {
  let curPos: number = 0;
  let leftChildPos: number = curPos * 2 + 1;
  let rightChildPos: number = curPos * 2 + 2;
  let leftChildExists: boolean = leftChildPos < maxHeap.length;
  let rightChildExists: boolean = rightChildPos < maxHeap.length;
  let finished = false;
  while (!finished) {
    if ( leftChildExists && rightChildExists &&
      ( ( ( maxHeap[curPos] < maxHeap[leftChildPos] ) || ( maxHeap[curPos] < maxHeap[rightChildPos] ) ) ) ) {
      let swapPos: number = maxHeap[leftChildPos] > maxHeap[rightChildPos] ? leftChildPos : rightChildPos;
      swap( maxHeap, curPos, swapPos );
      curPos = swapPos;
    } else {
      if ( leftChildExists && ( maxHeap[curPos] < maxHeap[leftChildPos] ) ) {
        swap( maxHeap, curPos, leftChildPos );
        curPos = leftChildPos;
      } else {
        finished = true;
      }
    }
    leftChildPos = curPos * 2 + 1;
    rightChildPos = curPos * 2 + 2;
    leftChildExists = leftChildPos < maxHeap.length;
    rightChildExists = rightChildPos < maxHeap.length;
  }
} 

function maxHeapExtract(maxHeap: number[]): number {
  let maxVal: number = maxHeap[0];
  maxHeap[0] = maxHeap.pop();
  bubbleDown(maxHeap);
  return maxVal;
}

function findKthLargest(nums: number[], k: number): number {
  let maxHeap: number[] = [];
  for (const num of nums) {
    maxHeapInsert(maxHeap, num);
  }

  let maxElement: number = null;
  for (let i = 1; i <= k; i++) {
    maxElement = maxHeapExtract(maxHeap);
  }
  return maxElement;
}

/* 

COMPLEXITY ANALYSIS:
SPACE:
O(N) for storing heap
plus
O(1) for misc tracking variables
=
O(N)

TIME:
O(N) + O(log N) = O(N) for creating heap
plus
K * O(log N) for popping heap K times
=
O(N log N)

*/
