# Find Odd Names

[Read this in the Parent Directory](https://github.com/miku86/katas)

This Repo includes Code Katas I have solved or I am currently solving.

Feel free to look at my Solutions, use them, improve them.

Also feel free to [contact me](#contact)

---

## Installation

[Instructions in the Parent Directory](https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names)

## About this Kata

[Source](https://www.codewars.com/kata/multiples-of-3-or-5)

I solve the Katas step-by-step, you can have a look at the commits.

The final code is optimized for readability in a professional setting, not for "cleverness".
I wrote a [Post about Cleverness](https://dev.to/miku86/diary---20180830-4f5e).

### Instructions:

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

Preserve the order of the original list.
Return an empty array `[]` if there is no developer with an "odd" name.
The input array and first names will always be valid and formatted as in the example above.

```
Input:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

Output:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]

// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
```

---

## License

Distributed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/) license.

---

## Contact

- miku86
- [E-Mail](mailto:hello@miku86.com)
- [www](https://miku86.com)
- [Github](https://github.com/miku86)
- [Twitter](https://twitter.com/miku86com)
