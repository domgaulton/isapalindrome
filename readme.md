# Is A Palindrome?

## Installation

In your project run `npm i isapalindrome`

## Usage

To check if a string is a [palindrome](https://en.wikipedia.org/wiki/Palindrome "Wikipedia page for Palindrome") import the package and pass your string within the `.isAPalindrome()` function.

```js
var isapalindrome = require('isapalindrome');

var test = isapalindrome.isAPalindrome('test');

console.log(test);
// False

var kayak = isapalindrome.isAPalindrome('kayak');

console.log(kayak);
// True
```