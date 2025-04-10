/*
Leetcode 1161: Maximum Level Sum of a Binary Tree
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Example 1:
<image of tree>
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
<image of tree>
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
 
Constraints:
The number of nodes in the tree is in the range [1, 10**4].
-10**5 <= Node.val <= 10**5
*/

/*
BUCK'S NOTES & OBSERVATIONS:
There is no way avoid doing a full traversal of the tree, we need to visit
each node to compute the level sums.

We could do a DFS and keep separate variables for each level sum which are
added to as we encounter nodes at the various levels.

But it seems more intuitive to do a BFS.  As we add nodes to the queue, when
we reach the end of a level, we add a sentinel to the queue indicating the end
of a level. We know it's the end of a level, and to add a sentinel to the queue - it will
be after the rightmost child of a node popped from the queue that has a sentinel following it.

As we process nodes popped off the front of the queue, we add up the values until a
sentinel is reached in the queue.  The current sum is pushed onto to the result array of level sums,
and the current sum is set back to zero to start summing the next level.
*/ 

var maxLevelSum = function(root) {
  let maxLevelSum = { level: 1, sum: Number.MIN_SAFE_INTEGER }
  let curLevel = 1;
  let curLevelSum = 0;

  let bfsQ = [];
  bfsQ.push(root);
  bfsQ.push(null);

  while (bfsQ.length > 0 && bfsQ[0] != null) {
    curNode = bfsQ.shift();
    curLevelSum += curNode.val;
    if (curNode.left != null) {
      bfsQ.push(curNode.left);
    }
    if (curNode.right != null) {
      bfsQ.push(curNode.right);
    }
    if (bfsQ[0] === null) {  // We've reached the end of the level
      if (curLevelSum > maxLevelSum.sum) {
        maxLevelSum.level = curLevel;
        maxLevelSum.sum = curLevelSum;
      }
      let toss = bfsQ.shift();
      curLevelSum = 0;
      curLevel++;
      bfsQ.push(null);
    }
  }

  return maxLevelSum.level;
};
