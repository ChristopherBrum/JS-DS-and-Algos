# sum list nums

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