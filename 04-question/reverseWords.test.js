const { reverseWords } = require('./reverseWords');

test('returns string of words reversed and in same position', () => {
  let myString = 'My favorite color in the whole world is red';
  let myStringReversed = reverseWords(myString);
  let finalWords = "yM etirovaf roloc ni eht elohw dlrow si der";

  expect(myStringReversed).toEqual(finalWords);
});
