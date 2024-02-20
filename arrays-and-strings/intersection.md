# intersection

Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.

```js
/*
Problem:
in: 2 arrays
out: 1 new array
- write a function that takes two arrays and returns a new array with the elements that are contained in both arrays
- each array will have unique elements

Implicit:
- both given arrays will only contain number elements
- the given arrays will not be ordered
- the returned array will be ordered, asc
- an empty array is a valid return value

Examples:
intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
intersection([2,4,6], [4,2]) // -> [2,4]
intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
intersection([0,1,2], [10,11]) // -> []

Algo:
- define a var (resultArr) set to an empty array
- iteratve over the first array
  - if the current element is found in the second array 
    - push the current element to resultArr
- return resultArr
*/

// BRUTE FORCE O(n*m)
const intersection = (a, b) => {
  const resultArr = [];
  a.forEach((el) => {
    if (b.includes(el)) resultArr.push(el);
  });
  return resultArr;
};

/*
- decalre a var (common) set to an empty array
- create a set, and add all elements from array a into set
- iterate over array b
  - if the current element is found in the set
    - push to common
- return common
*/

// USING A SET O(n+m)
const intersection = (a, b) => {
  const common = [];
  const setA = new Set(a);
  for (let i = 0; i < b.length; i += 1) {
    if (setA.has(b[i])) {
      common.push(b[i]);
    }
  }
  return common;
}

console.log(intersection([4,2,1,6], [3,6,9,2,10])); // -> [2,6]
console.log(intersection([2,4,6], [4,2])); // -> [2,4]
console.log(intersection([4,2,1], [1,2,4,6])); // -> [1,2,4]
console.log(intersection([0,1,2], [10,11])); // -> []

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
intersection(a, b) // -> [0,1,2,3,..., 49999]

module.exports = {
  intersection,
};
```