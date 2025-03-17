/*
Leetcode 199: Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it,
return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,2,3,4,null,null,null,5]
Output: [1,3,4,5]

Example 3:
Input: root = [1,null,3]
Output: [1,3]

Example 4:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

/*
 BUCK'S NOTES:
 We've been given the advice that this is a BFS (Breadth First Search) problem.
 I observe that the values that we want as part of the output, are in order
 with regards to a BFS, but they aren't every value in a tree.  More specifically,
 the values we want are the last value of each level.
 BFS is usually implemented as a queue, where all the nodes of a particular level
 end up contiguous in the queue, and (though this is not a requirement of BFS)
 typically they are put in the queue from left to right.

 So all we need to know, is where the nodes of one level end, and the next level
 begins.  Which means we need to track the levels of the nodes, or at least track
 when there is an increase in the level. When there is an increase in the level,
 we can push the value onto the array of results.
 */
