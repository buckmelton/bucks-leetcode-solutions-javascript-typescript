/*

Leetcode 234: Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 
Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

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

 /* 
 BUCK'S NOTES:
 Since this is only a singly-linked list, we don't have access to the other
 end of the list, which we MUST know to determine if it's a palindrome. We
 could consider solutions where we go through and put node values on a stack
 for future comparison with their mirror-image nodes, but the problem there
 is that we won't know where to start the comparison, i.e. where the middle
 of the list is.

 If we already have to traverse the list anyway, I think the best approach is to
 traverse the list and create a doubly-linked list along the way.  When we
 reach the end, we'll have pointers to both head and tail for a doubly-
 linked list and can then follow a traditional recursive (or iterative!) method.

 One tricky part is determining if the head and tail have crossed each other.
 If we have an odd number of nodes, then at some point head === tail, so that's
 easy.  If we have an even number, we can't know if head and tail have passed
 each other without extra processing or saving off some way to track where head
 and tail are relative to each other.

 Depending on how much we want to alter the given data structure, we could add
 a "visited" attribute to the node, or an actual index to the node, in which 
 case I'm almost tempted, in the first traversal, to just convert the whole thing
 to an array on which we can perform the recursive palindrome testing.  But that
 seems to violate the spirit of the problem?

 */

 /*
 PSEUDOCODE:
 - Traverse linked list, create doubly-linked list along the way.
 - Starting with head and tail and advancing simultaneously from each
   end, follow canonical recursive method of determining palindrome:
   - Base case 1: head === null (ASSERT tail === null), return true (either empty list, or reached the middle of a list with even number of nodes)
   - Base case 2: head === tail (the objects themselves, not the values), return true (we've reached the middle of a list with an odd number of nodes)
   - Recursive case: return head.val === tail.val && isPalindromeHelper(head.next, tail.next)
*/

let isPalindrome = function(head) {

  const printList = function(head) {
    console.log(`**********`);
    while (head !== null) {
      console.log(`head.val: ${head.val}, head.prev: ${head.prev}, head.next: ${head.next}`);
      head = head.next;
    }
    console.log(`**********`);
  }

  const printListBackwards = function(tail) {
    console.log(`**********`);
    while (tail !== null) {
      console.log(`tail.val: ${tail.val}, tail.next: ${tail.next}, tail.prev: ${tail.prev}`);
      tail = tail.prev;
    }
    console.log(`**********`);
  }

  // traverse list and create doubly-linked list
  let curNode = head;
  if (curNode != null) {
    curNode.prev = null;
  }
  let prevNode = undefined;
  while (curNode.next != null) {
    prevNode = curNode;
    curNode = curNode.next;
    curNode.prev = prevNode;
  }
  let tail = curNode;

  // ASSERT: we now have a doubly-linked list with head and tail
  // printListBackwards(tail);
 
  function isPalindromeHelper(head, tail) {
    if (head === null) { return true; }
    if (head === tail) { return true; }
    return ((head.val === tail.val) && isPalindromeHelper(head.next, tail.prev));
  }

  return isPalindromeHelper(head, tail);    
};

/*
COMPLEXITY ANALYSIS:
SPACE: O(N).  We're adding a 'prev' field to each of the nodes, plus we're placing N/2 recursive calls on the stack.
TIME: O(N).  We're traversing all N linked list nodes once to create doubly-linked list, and we're making N/2 recursive calls.
*/