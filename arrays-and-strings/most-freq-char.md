# most frequent char

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