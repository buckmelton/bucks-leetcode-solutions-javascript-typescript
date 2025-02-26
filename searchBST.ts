/*

Leetcode 700: Search in a Binary Search Tree
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree
rooted with that node. If such a node does not exist, return null.

Example 1:
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:
Input: root = [4,2,7,1,3], val = 5
Output: []
 
Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 10**7
root is a binary search tree.
1 <= val <= 10**7

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    
  // Base case
  if (root === null) {
    return null;
  }

  // We found it
  if (val === root.val) {
    return root;
  }

  // We didn't find it, recurse down the
  if (val < root.val) {
    return searchBST(root.left, val);
  }
  return searchBST(root.right, val);

};

/*
SPACE COMPLEXITY:
	The space needed for the recursion stack:
	O(log n): Average case, assuming fairly balanced tree
	O(n): Worst case, if tree is opposite of balanced - i.e. a straight-line tree
TIME COMPLEXITY:
	O(log n): Average case, assuming fairly balanced tree
	O(n): Worst case, if tree is opposite of balanced - i.e. a straight-line tree
*/