/*
Leetcode 206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 // Input: singly linked list
 // Output: the list, reversed

 // Input: 1 -> 2 -> 3
 // Output: 3 -> 2 -> 1

/*
Pseudocode, iterative
  initialize prevNode to null
  initialize curNode to head
  For each node curNode in list
    nextTemp = curNode.next
    change curNode to prevNode
    change prevNode to curNode
    change curNode to nextemp
  return prevNode
*/

function reverseList(head: ListNode | null): ListNode | null {
  let prevNode: ListNode = null;
  let currNode: ListNode = head;
  while (currNode != null) {
    let nextNodeTemp:ListNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNodeTemp;
  }
  return prevNode;
};