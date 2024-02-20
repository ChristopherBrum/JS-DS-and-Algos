# five sort

Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

```js
/*
Problem:
in: 1 array of numbers
out: 1 array/the same array

- given an arraya of numbers
- return the same array, but all of the 5's at the end of the arraya
- the order of the other numbers is not important
- 

Implicit:
- can the given array be empty?
- will the elements always be whole numbers?

Examples:
fiveSort([12, 5, 1, 5, 12, 7]); // -> [12, 7, 1, 12, 5, 5] 
fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]); // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
fiveSort([5, 5, 5, 1, 1, 1, 4]); // -> [4, 1, 1, 1, 5, 5, 5] 
fiveSort([5, 5, 6, 5, 5, 5, 5]); // -> [6, 5, 5, 5, 5, 5, 5] 
fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]); // -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 
const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]

DS:
- obviously arrays, since we're mutating the given array

Algo:
- set a start pointer to 0 (start)
- set an end pointer to the length of the given array - 1 (end)
- start pointer moves when: the current element is not 5
  - increment by 1
- end pointer moves when: the current element is 5
  - decrement by 1
- stop iterating when: start is greater than or equal to the end pointer
*/

const fiveSort = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  
  while (start < end) {
    // move start index to find a 5
    while (nums[start] !== 5) {
      start += 1;
    }
    // move end index to not be on a 5
    while (nums[end] === 5) {
      end -= 1;
    }
    // check that start is before end
    if (start >= end) break;
    // swap pointer values
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
  }
  return nums
};

console.log(fiveSort([12, 5, 1, 5, 12, 7])); // -> [12, 7, 1, 12, 5, 5] 
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])); // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
console.log(fiveSort([5, 5, 5, 1, 1, 1, 4])); // -> [4, 1, 1, 1, 5, 5, 5] 
console.log(fiveSort([5, 5, 6, 5, 5, 5, 5])); // -> [6, 5, 5, 5, 5, 5, 5] 
console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])); // -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 

const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]
```