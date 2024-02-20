# compress

Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

```txt
'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
```

You can assume that the input only contains alphabetic characters.

```js
/*
Problem:
- Write a function (compress) that takes a string as an arg
- returns a compressed version of given string  
  - consecutive occurences of the same char are compressed into the number of occurences followed by the char
  - single occurences will remain unchanged
  - compress('ccaaatsss'); // -> '2c3at3s'
- the given string will only contain altha chars
- remember number of occurences followed by the char

- can the given string contain upper and lowercase letters?

Examples:
- compress('ccaaatsss'); // -> '2c3at3s'
- compress('ssssbbz'); // -> '4s2bz'
- compress('ppoppppp'); // -> '2po5p'
- compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'

Algo:
- declare a p1 and p2 variable to act as our pointers
- declare a compressed variable
- p1 will always point at the first character in a group
- p2 will iterate until it finds a different character
- while p2 is less than length of the given string
  - if chars at p1 and p2 are the same  
    - increment p2
  - if chars at p1 and p2 are NOT the same 
    - slice the string from p1 to p2
    - if the length is equal to 1
      - add the char p1 is pointing
    - else
      - add the length of the sliced string and then the p1 char to compressed
    - set p1 to the value of p2
- return compressed

*/

const createGroup = (subStr, p1, p2, s) => {
  let compressed = '';
  
  if (subStr.length === 1) {
    compressed += s[p1];
  } else {
    compressed += String(subStr.length) + s[p1];
  }

  return compressed;
}

const compress = (s) => {
  let p1 = 0;
  let p2 = 0;
  let compressed = '';
  
  while (p2 < s.length) {
    if (s[p1] === s[p2]) {
      p2++;
    } else {
      const subStr = s.slice(p1, p2);
      compressed += createGroup(subStr, p1, p2, s);
      p1 = p2;
    }
  }
  const subStr = s.slice(p1, p2);
  compressed += createGroup(subStr, p1, p2, s);
  
  return compressed;
};

module.exports = {
  compress,
};

compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// -> '127y'
```