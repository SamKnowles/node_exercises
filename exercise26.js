/*
EXERCISE 26:

        Write a function called "isPalindrome" that takes a parameter called "str" and returns whether "str" is a palindrome without respect to punctuation, spaces, or capitalization.

        For example:

        isPalindrome("Tacocat .") should return true
        isPalindrome("Niagara") should return false
        isPalindrome("T ac' ocat.   ") should return true
*/

function isPalindrome(str){
    str = str.toLowerCase().replace(/[^a-z]+/g,'');
    if (reverseWords(str) === str) {
      return true;
    }
    else {
      return false;
    }
}

function reverseWords(str){
  var backWords = (str.split('').reverse().join('').split(' ').reverse().join(' '));
  return backWords;
}
