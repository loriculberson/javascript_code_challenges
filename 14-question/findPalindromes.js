// 47 plus its reverse (47 => 74) add together to a number (121) which is a palindrome
// starting at 0, find the first 25 numbers that have this same characteristic where the 
// palindrome is greater than 1000

function twentyFivePalindromes(){
  //create loop that starts with 109 until array length = 25
  //pass value into function that reverses the value
  //function to find sum
  //pass sum into func isPalindrome?
  //if true
  //pass into is greater than 1000 checker
  //if true, return value to array
  let palNumbers = [];
  //let i = 109;
  //while(palNumbers.length < 25) {
  for (i = 109; palNumbers.length < 25; i++) {
    let iReversed = findReverseVal(i); ///returns an integer
    let sum = findSum(i, iReversed);

    if (sumIsPalindrome(sum) && sumIsGreaterThanK(sum)) {
      palNumbers.push(i);
    }
    //i++;
  }
  return palNumbers;
}

function findReverseVal(val){
  let revVal = parseInt(val.toString().split('').reverse().join(''))
  return revVal;
}

function findSum(a, b) {
  return a + b;
}

function sumIsPalindrome(sum) {
  let revSum = findReverseVal(sum);
    if (sum === revSum) {
      return true;
    }
}

function sumIsGreaterThanK(sum) {
  if (sum > 1000) {
    return true;
  }
}

module.exports = { twentyFivePalindromes, findReverseVal, findSum, sumIsPalindrome, sumIsGreaterThanK };
