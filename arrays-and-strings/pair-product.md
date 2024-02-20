# pair product

Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.

```js
/*
Explicit:
Input: 1 array, 1 number
Output: 1 array (with 2 number elements)
- Write a func that takes an array of numbers and an individual number as args
- Re turn an array with 2 numbers that represent the indicies of 2 elements, that, when multiplied together equal the second numbe argument
- the returned indices will be unique
- return indices not the elements
- there will always be 1 pair that satisfies this condition

Implicit:
- given array will only containn whole numbers
- there will be at least 2 elements in the given array 
- numbers will always be positive
- the returned indices will be sorted
- are repeat numbers in the given array possible?

Examples:
pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]

Algo:
- define a var (divisors) set to an empty object
  - if the targetProduct is evenly divisible by the current element (use modulo)
    - declare quotient var set to targetProduct / current element
    - if quotient is found in the given array (&& has a different index than the current index)
      - return [index 1, index 2]

*/

const pairProduct = (numbers, targetProduct) => {
  for (let i = 0; i < numbers.length; i += 1) {
    if (targetProduct % numbers[i] === 0) {
      const quotient = targetProduct / numbers[i];  
      if (quotient in numbers) {
        const qIndex = numbers.indexOf(quotient);
        return [i, qIndex];
      }
    }
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)); // -> [1, 4]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 6, 8, 2], 16)); // -> [2, 3]

module.exports = {
  pairProduct,
};
```