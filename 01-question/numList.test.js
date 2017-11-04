const { diff, sum, calculateStats } = require('./numList');
//let diff = myMath.diff;
//let sum = myMath.sum;
//let maxValue = myMath.maxValue;
//let minValue = myMath.minValue;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 6 - 2 to equal 4', () => {
  expect(diff(6,2)).toBe(4);
});

test('returns the biggest number', () => {
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  const stats = calculateStats(numList);

  expect(stats.maxValue).toBe(10);
});

test('returns the smallest number', () => {
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  const stats = calculateStats(numList);

  expect(stats.minValue).toBe(-5);
});

test('returns the total of all array values', () => {
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  const stats = calculateStats(numList);

  expect(stats.total).toBe(40);
});

test('returns the quantity of numbers in the array', () => {
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  const stats = calculateStats(numList);

  expect(stats.quantity).toBe(16);
});

test('returns the average of all array values', () => {
  const numList = [9, 1, -2, 6, 10, -5, -3, -1, -4, 8, 4, 5, 7, 0, 3, 2]
  const stats = calculateStats(numList);

  expect(stats.average).toBe(2.5);
});
