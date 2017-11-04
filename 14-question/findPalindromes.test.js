const { twentyFivePalindromes, findReverseVal, findSum, sumIsPalindrome, sumIsGreaterThanK } = require('./findPalindromes');

test('finds palindrome of val', () => {
  let val = 47;
  let revVal = findReverseVal(val);
  let expected = 74;

  expect(revVal).toBe(expected);
});

test('calculates the sum', () => {
  let val = 47;
  let revVal = 74;
  let sum = findSum(val, revVal);
  let expected = 121;

  expect(sum).toBe(expected);
});

test('returns true if sum is a palindrome', () => {
  let sum = 121;
  let sumIsPal = sumIsPalindrome(sum);

  expect(sumIsPal).toBe(true);
});

test('returns true if sum is greater than 1000', () => {
  let sum = 1001;
  let greaterThanAThousand = sumIsGreaterThanK(sum);

  expect(greaterThanAThousand).toBe(true);
});

test('finds first 25 nums + inverse is a palindrome', () => {
  let findValues = twentyFivePalindromes();
  let expected = [
    209, 308, 407, 506, 605, 704, 803, 902, 1000, 
    1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 
    1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017
  ];

  expect(findValues).toEqual(expected);
});
