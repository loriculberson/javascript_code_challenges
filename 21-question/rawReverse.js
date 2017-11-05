// Reverse a string of ~100 bytes without using any 
// built in reversal functions, and allocating no more
// than a few bytes of additional memory.

function rawReverse(string){
  let i = string.length - 1;
  let revString = '';
  
  while (i >= 0) {
    revString = revString.concat(string[i]);
    i--;
  }
    return revString;
}


module.exports = { rawReverse };
