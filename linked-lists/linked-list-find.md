# linked list find

Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (node, target) => {
  if (node === null) return false;
  if (node.val === target) return true;
  return linkedListFind(node.next, target);
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(linkedListFind(a, "c")); // true

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(linkedListFind(a, "d")); // true

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(linkedListFind(a, "q")); // false

const node1 = new Node("jason");
const node2 = new Node("leneli");
node1.next = node2;
// jason -> leneli
console.log(linkedListFind(node1, "jason")); // true

const node1 = new Node(42);
// 42=
console.log(linkedListFind(node1, 42)); // true

const node1 = new Node(42);
// 42=
console.log(linkedListFind(node1, 100)); // false
```