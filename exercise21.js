/*
EXERCISE 21:

        Write a function called "getTwoBiggest" that takes a parameter called "arr" and returns the two biggest numbers in "arr" in descending order.

        For example:

        getTwoBiggest([1,2,3,4,5]) should return [5,4]
        getTwoBiggest([4,5,5,4]) should return [5,5]
        getTwoBiggest([-11,-11]) should return [-11,-11]
*/

function getTwoBiggest(arr){
  var largestA = Number.NEGATIVE_INFINITY;
  var largestB = Number.NEGATIVE_INFINITY;

  for(var i = 0; i < arr.length; i++){

          if(arr[i] > largestA){
              largestB = largestA;
              largestA = arr[i];
          }
          else if (arr[i] > largestB) {
              largestB = arr[i];
          }
  }
  return [largestA, largestB];
}
