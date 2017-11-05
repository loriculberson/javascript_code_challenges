function reverseWords(myString) {
  //split string on the space to create array
  //iterate (map) through the array, split the letters in the word, reverse them,
  //join letters back together
  //join all the elements of the array
  let words = myString.split(' ');
  let revWords = words.map(function(word) {
    return word.split('').reverse().join('');
  });
  return revWords.join(' ');
}

module.exports = { reverseWords };
