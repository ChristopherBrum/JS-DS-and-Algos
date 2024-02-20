# anagrams

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