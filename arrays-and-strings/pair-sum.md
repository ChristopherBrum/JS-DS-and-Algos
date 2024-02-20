# pair sum

Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.

```js
/*
Explicit:
- write a func that takes
- input
  - 1 array (of numbers)
  - 1 number 
- output:
  - 1 array, containing 2 numbers
- return an array of two numbers
- these numbers represent indicies
- of which the elements at each indice equal the second arg when summed
- the numbers are the inbdices, not the elements
- each given array will contain a single matching pair

Problem: write a function that takes an array of numbers, and an individual number as arguments. The function should return an array containing 2 numbers. Those numbers are indices whose elements equal the target, when summed

Implicit:
- the given array will only contain whole numbers
- it will never be empty

Examples:
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
pairSum([9, 9], 18); // -> [0, 1]
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]

DS:

Algo:
- declare p1 assigned to 0
- declare p2 assigned to 0

- loop until p1 === array length
  - loop until p2 === array length
    - if elements at p1 and p2 equal the target num
      - return an [p1, p2]
    - increment p2 by1      
  - increment p1
  - set p2 to p1 + 1
  
*/
// BRUTE FORCE --> O(n^2)
// const pairSum = (numbers, targetSum) => {
//   let p1 = 0;
//   let p2 = 1;
  
//   while (p1 < numbers.length) {
//     while (p2 < numbers.length) {
//       if (numbers[p1] + numbers[p2] === targetSum) {
//         return [p1, p2];
//       }
//       p2++;
//     }
//     p1 += 1;
//     p2 = p1 + 1;
//   }
// };

/*
Algo:
- declare a var (prevNums) set to an object
- iterate over the given array
  - capture the current num in a var (num)
  - capture a complement value (targetSum - num) in a var (complement)
  
  - if the complement value is found in prevNums  
    - return [index, prevNums[complement]]
  
  - set key/value in prevNums object (element = index)
*/

// Linear time solution O(n)
const pairSum = (numbers, targetSum) => {
  const prevNums = {};
  
  for (let i = 0; i < numbers.length; i += 1) {
    let num = numbers[i];
    let complement = targetSum - num;
    
    if (complement in prevNums) {
      return [prevNums[complement], i];
    }
    
    prevNums[num] = i;
  }
}

console.log(pairSum([3, 2, 5, 4, 1], 8)) // [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)) // [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)) // [3, 5]
console.log(pairSum([1, 6, 7, 2], 13)) // [1, 2]
console.log(pairSum([9, 9], 18)) // [0, 1]
console.log(pairSum([6, 4, 2, 8 ], 12)) // [1, 3]

module.exports = {
  pairSum,
};
```