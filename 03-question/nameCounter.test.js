const { countNames } = require ('./nameCounter');

test('names are tallied into an array', () => {
  const list = ['bob', 'susan', 'james', 'susan', 'james', 'susan'];
  let talliedNames = countNames(list);
  let expected = { 'bob': 1,  'susan': 3, 'james': 2 };

  expect(talliedNames).toEqual(expected);
});

