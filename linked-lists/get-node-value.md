# get node value

Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.

```js
/*
- Write a function (getNodeValue) that takes in:
  - the head of a linked list
  - and an index.
- The function should return the value of the linked list at the specified index.
- If there is no node at the given index, return null.
- indexes start at 0

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (node, targetIdx, index=0) => {
  if (node === null) return null;
  if (targetIdx === index) return node.val;
  return getNodeValue(node.next, targetIdx, index + 1);
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(getNodeValue(a, 2)); // 'c'

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(getNodeValue(a, 3)); // 'd'

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(getNodeValue(a,) 7); // null

const node1 = new Node("banana");
const node2 = new Node("mango");
node1.next = node2;
// banana -> mango
console.log(getNodeValue(node1, 0)); // 'banana'

const node1 = new Node("banana");
const node2 = new Node("mango");
node1.next = node2;
// banana -> mango
console.log(getNodeValue(node1, 1)); // 'mango'
```