const { createHashedValues, findDuplicate } = require('./findDuplicate');

test('returns hashed values from randomized array', () => {
  let randomArray = [ 10, 5, 3, 8, 5, 9, 6, 2, 4, 1, 7 ];
  let hash = createHashedValues(randomArray);
  let finalHash = {
    "1": 1, "10": 1, "2": 1, "3": 1, "4": 1,
    "5": 2, "6": 1, "7": 1, "8": 1, "9": 1
  }
  expect(hash).toEqual(finalHash);
});
test('returns the one duplicate value', () => {
  let dupValue = "4";
  let hash = {
    "1": 1, "10": 1, "2": 1, "3": 1, "4": 2,
    "5": 1, "6": 1, "7": 1, "8": 1, "9": 1
  }
  let foundDupNum = findDuplicate(hash);
  expect(foundDupNum).toEqual(dupValue);
});
