/*
EXERCISE 24:

        Write a function called "longestWord" that takes a parameter called "str" and returns the biggest word in "str" (a word is anything separated by a space that doesn't include commas or periods).
        Preference is given to earlier words in the case of a tie.
        You may assume that commas and periods only appear at the ends of words.

        For example:

        longestWord("A really long sentence.") should return 'sentence' -- NOT 'sentence.'
        longestWord("Two equally long words are in this sentence.") should return 'equally'
        longestWord("Hey") should return 'Hey'
*/

function longestWord(str){
    var noPeriod = str.split('.').join(' ');
    var stringArray = noPeriod.split(' ');
    return getLongest(stringArray);
}

function getLongest(arr){
  var longest = 0;
  var longestString = '';

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
      longestString = arr[i];
    }
  }
  return longestString;
}
