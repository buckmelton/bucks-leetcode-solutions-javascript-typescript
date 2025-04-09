/*
Leetcode 199: Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
<image>
Output: [1,3,4]

Example 2:
Input: root = [1,2,3,4,null,null,null,5]
<image>
Output: [1,3,4,5]

Example 3:
Input: root = [1,null,3]
<image>
Output: [1,3]

Example 4:
Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

// I couldn't get the leetcode implicit internal conversion from root = array to root = TreeNode to work,
// so I created my own MyNode class and wrote a conversion function 'treeifyArray' to convert array into tree.

class MyNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeifyArray = (arr) => {
  if (arr.length == 0) {
    return null;
  }
  let root = new MyNode(arr[0]);
  let parentStack = [];
  let curParent = root;

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 1) {
      if (arr[i] != null) {
        curParent.left = new MyNode(arr[i]);
        parentStack.push(curParent.left);
      }
    } else {
      if (arr[i] != null) {
        curParent.right = new MyNode(arr[i]);
        parentStack.push(curParent.right);
      }
      curParent = parentStack.shift();
    }
  }
  return root;
}

var rightSideView = function(root) {
  // I couldn't get the leetcode implicit internal conversion from root = array to root = TreeNode to work,
  // so I have to hardcode the input here, exactly how leetcode encodes a tree as a BFS array.
  let newRoot = [1,2,3,null,5,null,4];
  newRoot = treeifyArray(newRoot);

  if ( newRoot === null ) {
    return [];
  }

  let rightSideVals = [];
  let bfsQ = [];

  bfsQ.push(newRoot);
  bfsQ.push(null);

  let curNode = newRoot;
  while (bfsQ.length > 0) {
    let prevNode = curNode;
    curNode = bfsQ.shift();
    while (curNode !== null) { // null indicating end of current level
      if (curNode.left !== null) {
        bfsQ.push(curNode.left);
      }
      if (curNode.right !== null) {
        bfsQ.push(curNode.right);
      }
      prevNode = curNode;
      curNode = bfsQ.shift();
    }
    // curNode is null, meaning we reached the sentinel telling us it's the
    // end of a level, and prevNode will hold a right hand view value.
    rightSideVals.push(prevNode.val);

    // add new sentinel to end of queue to mark end of next level
    if (bfsQ !== null && bfsQ.length > 0) {
      bfsQ.push(null);
    }
  }
  return rightSideVals;
};
