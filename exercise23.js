/*
EXERCISE 23:

        Write a function called "reverseWords" that takes a parameter called "str" and returns the string "str" with its words reversed.

        For example:

        reverseWords('some reversed words') should return 'emos desrever sdrow'
        reverseWords('a short') should return 'a trohs'
        reverseWords('tacocat 4 life') should return 'tacocat 4 efil'
*/

function reverseWords(str){
  var backWords = (str.split('').reverse().join('').split(' ').reverse().join(' '));
  return backWords;
}
