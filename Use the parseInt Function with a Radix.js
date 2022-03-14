// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

// The parseInt() takes two arguments, the first is the string and the second is the radix which states what base the number is in

function convertToInteger(str) {
  return parseInt(str, 2)

}

console.log(convertToInteger("10011"));