exports.isAPalindrome = function(input) {
  var removeSpaces = input.replace(/\s/g,'');
  var reversedInput = removeSpaces.split("").reverse().join("");
  var palinedrome;
  if ( removeSpaces == reversedInput ) {
    palinedrome = true;
  } else {
    palinedrome = false;
  }
  return palinedrome;
}