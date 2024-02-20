# Basic Traversal

## Basic Linked List Traversal using Iteration

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create nodes
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// linking nodes as a linked list
a.next = b;
b.next = c;
c.next = d;

const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log("current node: ", current.val);
    current = current.next;
  }
  console.log('Linked List traversed');
} 

printLinkedList(a);
```

---

## Basic Linked List Traversal using Recursion

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create nodes
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// linking nodes as a linked list
a.next = b;
b.next = c;
c.next = d;

// Using recursion
const printLinkedList = (node) => {
  if (node === null) {
    console.log('Linked List traversed');
    return;
  }
  console.log("current node: ", node.val);
  printLinkedList(node.next);
}

printLinkedList(a);
```