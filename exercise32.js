/*
EXERCISE 32:

        Write a function called "isValidCardFormat" that takes a parameter called "number" and returns whether it is a correctly-formatted credit card number.

        Valid credit card numbers have a prefix (the first numbers) that matches a particular type of card.
        Valid credit card numbers will also have a length that matches the type of card.
                         __________________________________
                         |       Prefix        |  Length  |
                         ----------------------------------
                    Visa |          4          | 13 or 16 |
        American Express |       34 or 37      |    15    |
              MasterCard |        51-55        |    16    |
                Discover |        6011         |    16    |
            Diner's Club | 300-305 or 36 or 38 |    14    |
                         ----------------------------------

        For example:

        isValidCardFormat("4175937769982") should return true //visa with length of 13
        isValidCardFormat("4175937769982456") should return true //visa with length of 16
        isValidCardFormat("3035937769982456") should return false //Diner's Club with a length of 16
        isValidCardFormat("5635937769982456") should return false //Invalid prefix with a length of 16
*/

function isValidCardFormat(number){
  if (isVisaFormat(number)){
    return true;
  }
  else if (isAmeExFormat(number)){
    return true;
  }
  else if (isMasterFormat(number)){
    return true;
  }
  else if (isDiscoverFormat(number)){
    return true;
  }
  else if (isDinerFormat(number)) {
    return true;
  }
  else {
    return false;
  }
}

function isVisaFormat(visa){
  var visaNum = /^4[0-9]{12}(?:[0-9]{3})?$/;
  return visaNum.test(visa);
}

function isAmeExFormat(ameEx){
  var ameExNum = /^3[47][0-9]{13}$/;
  return ameExNum.test(ameEx);
}

function isMasterFormat(master){
  var masterNum = /^5[1-5][0-9]{14}$/;
  return masterNum.test(master);
}

function isDiscoverFormat(discover){
  var discoverNum = /^(?:6011\d{12})|(?:65\d{14})$/;
  return discoverNum.test(discover);
}

function isDinerFormat(diner){
  var dinerNum = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  return dinerNum.test(diner);
}
