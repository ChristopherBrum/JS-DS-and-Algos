# reverse list

Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

```js
/*
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

*/
/*
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// iterative solution O(n) time complexity, O(1) space complexity
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// recursive solution O(n) time complexity, O(n) space complexity
const reverseList = (node, prev=null) => {
  if (node === null) return prev;
	const next = node.next;
  node.next = prev;
  return reverseList(next, node);
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
reverseList(a); // f -> e -> d -> c -> b -> a

const x = new Node("x");
const y = new Node("y");
x.next = y; // x -> y
reverseList(x); // y -> x

const p = new Node("p"); // p
reverseList(p); // p
```