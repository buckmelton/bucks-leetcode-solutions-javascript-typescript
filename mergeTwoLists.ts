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
