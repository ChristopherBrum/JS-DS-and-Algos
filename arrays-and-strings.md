# JavaScript - Arrays and Strings 

## uncompress

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

---

## compress

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

---

## anagrams

Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

```js
/*
explicit rules:
- Write a function that takes 2 strings as args
- return a boolean based on whether the strnings are anagrams or not
- an anagram is a string that contains the same letters as another string

implicit rules:
- both strings will have the same number of characters
- the number of occurrences of each letter in both strings should be equal
- all given strings will contain letter characters only?
- all given strings will contain lowercase letters only?
- any special characters accepted? 
- white space?

examples:
anagrams('taxi', 'tax'); // -> false
anagrams('tax', 'taxi'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('abbc', 'aabc'); // -> false
anagrams('po', 'popp'); // -> false

algo:
- if the given strings are of different lengths, return false
- sort each of the given strings
- iterate over the given strings
  - if the characters at the current index are not equal  
    - return false
- after iteration, return true
*/

const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const a1 = s1.split('').sort();
  const a2 = s2.split('').sort();
  
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  
  return true;
};

anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('paper', 'reapa'); // -> false
anagrams('elbow', 'below'); // -> true
anagrams('tax', 'taxi'); // -> false
anagrams('taxi', 'tax'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('abbc', 'aabc'); // -> false
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo') // -> false
```

---

## most frequent char

Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

```js
/*
explicit rules:
- write a func that takes 1 string arg
- return the most frequently found character in the given string
- if there is a tie, return the character appearing first
- the given string will not be empty

implicit rules:
- is this problme case sensitive?
- will the given strings only contain lowercaser alpha characters?

examples:
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'

algo:
- declare a var (tally)
- declare a mostFrequent var set to 0
- iterate over the given string
  - if tally does not contain a key of the current characters
    - add the current char as a key, with value set to 1
  - otherwise,
    - increment the value by 1
- iterate over the given string
  - if the value of the current key/value pair is > mostFrequent
    - set mostFrequent to the current key
- return current key
*/
const mostFrequentChar = (s) => {
  const tally = {};
  let occurrences = 0;
  let mostFreq;
  
  for (let i = 0; i < s.length; i++) {
    if ((s[i] in tally)) {
      tally[s[i]] += 1;
    } else {
      tally[s[i]] = 1;
    }
  }
  
  for (let char of s) {
    if (tally[char] > occurrences) {
      occurrences = tally[char];
      mostFreq = char;
    }
  } 
  
  return mostFreq;
};

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'
```