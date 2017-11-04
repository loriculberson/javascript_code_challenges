function palindromes() {
  let years = [];
  let today = new Date();
  let year = today.getFullYear();
  //from 0 to current year pass year into isPalindrome? checker
  //returns true, push year into years array
  for (let i = 0; i <= year ; i++)
    if (isPalindrome(i)) {
      years.push(i);
    }
  return years;
}

function isPalindrome(num) {
  let val = num.toString();
  let valRev = val.split('').reverse().join('')
    if (val === valRev) {
      return true;
    }
}

module.exports = { palindromes };
