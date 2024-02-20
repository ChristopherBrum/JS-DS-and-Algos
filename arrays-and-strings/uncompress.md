# uncompress

Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

```txt
<number><char>

for example, '2c' or '3a'.
```

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

```js
/*
Problem:
- write a function that takes a string as an arg
- the string input will be formatted inro gorups like so:
  <number><character>
  
  --> '2c' or '4z'
  
- return an uncompressed version of the string where:
  - each 'character' is repeated the 'number' of times

  --> 2c --> cc
  --> 3a5z --> aaazzzz

- assume the given string is formatted appropriately

- uncompress("2c3a1t"); // -> 'ccaaat'
- uncompress("4s2b"); // -> 'ssssbb'
- uncompress("2p1o5p"); // -> 'ppoppppp'uncompress
- uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'

Algo:
- define pt1 and pt2 variables both pointing at index 0
  - pt1 will represent the number value
  - pt2 will represent the end of the number character
- increment pt2 until it reaches an alphabetic character
- slice the characters up to but not including the character pt2 is pointing to
- repeat the alphabetic character the number of times of the sliced number
- reposition both pointers to the next character
- return the new string once either pointer is out of bounds


*/

const uncompress = (s) => {
  let p1 = 0;
  let p2 = 0;
  let uncompressed = '';
  
  while (p1 < s.length) {
    if (s[p2].match(/[\d]/)) {
      p2++;
    } else {
    const num = Number(s.slice(p1, p2));
    const newGroup = s[p2].repeat(num);
    uncompressed += newGroup;
    p2++;
    p1 = p2;  
    } 
  }
  
  return uncompressed;
};

uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4s2b"); // -> 'ssssbb'
uncompress("2p1o5p"); // -> 'ppoppppp'
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
```