# JavaScript - Linked Lists

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

---

## sum list

Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

```js
/*
- Write a function (linkedListValues) that takes the head of a linked list as an argument.
- The function should return an array containing all values of the nodes in the linked list.

Implicit:
- if there are no Node linked, return an empty array
- 

DS: 
- linked lists

Algo:
- return values if current node  = null
- push the current val to values
- invoke linkedListValues, passing in next node and values
- return the value returned by the function invocation
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (node, values=[]) => {
  if (node === null) return values;
  values.push(node.val);
  return linkedListValues(node.next, values);
}

///////////////
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

///////////////
const x = new Node("x");
const y = new Node("y");
x.next = y;
console.log(linkedListValues(x)); // -> [ 'x', 'y' ]

///////////////
const q = new Node("q");
console.log(linkedListValues(q)); // -> [ 'q' ]

///////////////
console.log(linkedListValues(null)); // -> [ ]
```

---

## sum list

Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

```js
/*
- Write a function (sumList) that takes in the head of a linked list 
- each node value will be a number
- the function should return the total sum of all values in the linked list.

Implicit:
- if no nodes exist return 0
- negative numbers are acceptable
- 

DS: 
- linked lists

Algo:
- if node is null, return 0
- return the current node val + the return value of calling sumLIst and passing in the next node

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (node) => {
  if (node === null) return 0;
  return node.val + sumList(node.next);
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(sumList(a)); // 19

const x = new Node(38);
const y = new Node(4);
x.next = y;
console.log(sumList(x)); // 42

const z = new Node(100);
console.log(sumList(z)); // 100

console.log(sumList(null)); // 0
```

---

## linked list find

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

---

## get node value

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