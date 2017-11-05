const { rawReverse } = require('./rawReverse');

test('return reversed string', () => {
  let string = '49 b8 92 43 39 6b ed 72 6a 89 9f d4 7d 50 52 11 58 f8 b3 15 97 88 ec f7 9d 0f 57 e0 56 b1 bc 14 4c f6 b7 0e 21 23 0f be 87 d2 37 6f 52 40 1d  f0 fd b4 b7 e9 77 ee 78 6f f6 34 55 5a 6d dd 7b 4c f3 78 2c 2e ca e2 a1 74 1c af ea b4 a4 0a f3 dc 59 f9 b1 39 56 7c e6 78 b7 8e 79 a5 be 08 c1 9e f2 40 da 99'
  let reversedString = rawReverse(string);
  let finalReversedString = '99 ad 04 2f e9 1c 80 eb 5a 97 e8 7b 87 6e c7 65 93 1b 9f 95 cd 3f a0 4a 4b ae fa c1 47 1a 2e ac e2 c2 87 3f c4 b7 dd d6 a5 55 43 6f f6 87 ee 77 9e 7b 4b df 0f  d1 04 25 f6 73 2d 78 eb f0 32 12 e0 7b 6f c4 41 cb 1b 65 0e 75 f0 d9 7f ce 88 79 51 3b 8f 85 11 25 05 d7 4d f9 98 a6 27 de b6 93 34 29 8b 94'

  expect(reversedString).toEqual(finalReversedString);
});
