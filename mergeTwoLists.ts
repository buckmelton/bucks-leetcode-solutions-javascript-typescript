/*

21. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

 
Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 
Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

/*
 Another straightforward common problem, using simple traversal of two linked lists.

 PSEUDOCODE:
 We are given the heads of two linked lists, list1 and list2

 - Initialize mergedList head to the empty list
 - Initialize mergedList tail to mergedList head
 - Initialize current list 1 pointer to list1 head
 - Initialize current list 2 point to list2 head

 - While neither list head is null
  - If cur list1 ptr value <= cur list2 ptr value
    - merged list tail.next = cur list 1 ptr
    - merged list tail = merged list tail.next
    - cur list 1 ptr = cur list 1 ptr.next
    - merged list tail.next = null
  - Else (cur list1 ptr value) > cur list 1 ptr
    - merged list tail.next = cur list 2 ptr
    - merged list tail = merged list tail.next
    - cur list 2 ptr = cur list 2 ptr.next
    - merged list tail.next = null

- If cur list1 pointer is null
  - mergedList tail.next = cur list 2 pointer
- Else (cur list2 pointer is null)
  - mergedList tail.net = cur list 1 pointer

- Return mergedList head

*/ 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let mergedListHead: ListNode = null;
  let mergedListTail: ListNode = mergedListHead;
  let curList1Ptr: ListNode = list1;
  let curList2Ptr: ListNode = list2;

  // If either list is null, we can just return the non-null list
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  // ASSERT: both list1 and list2 have a least one node with a value

  // Find first node so we can initialize mergedListHead to an actual node
  if (list1.val < list2.val ) {
    mergedListHead = list1;
    mergedListTail = list1;
    curList1Ptr = list1.next;
  } else {
    mergedListHead = list2;
    mergedListTail = list2;
    curList2Ptr = list2.next;
  }
  // We've connected the first node to the merged list, and advanced the pointer
  // for the involved list to the next node, we can now sever the merged node from
  // its list
  mergedListTail.next = null;

  while ((curList1Ptr !== null) && (curList2Ptr !== null)) {
    if (curList1Ptr.val < curList2Ptr.val) {
      // Add list1 node to merged list and advance cur list1 pointer
      mergedListTail.next = curList1Ptr;
      curList1Ptr = curList1Ptr.next;
    } else {
      // Add list2 node to merged list and advance cur list2 pointer
      mergedListTail.next = curList2Ptr;
      curList2Ptr = curList2Ptr.next;
    }
    // Advance merged list tail
    mergedListTail = mergedListTail.next;
    // Sever list node
    mergedListTail.next = null;
  }

  // ASSERT: at least one of list1 or list2 is now null

  if (curList1Ptr === null) {
    // Add rest of list2 to merged list
    mergedListTail.next = curList2Ptr;
  } else { // curList2Ptr === null
    // Add rest of list1 to merged list
    mergedListTail.next = curList1Ptr;
  }
  // We have our merged list, we don't need to care about any other pointer manipulation
  return mergedListHead;
};