// You have a randomized array with integers between 1 and 
// 1,000,000, one integer is in the array twice. Find the
// duplicate number in O(n) time.
let limit = 10;
let numberToFind = getRandomInt(limit)
let randomArray = createRandomizedArrayOfNums(limit, numberToFind);

function createHashedValues(randomArray){
  let valuesHash = {};
  randomArray.forEach(function(num) {
    if(!valuesHash.hasOwnProperty(num)) {
      valuesHash[num] = 0;
    }
    valuesHash[num] += 1
  })
  return valuesHash;
}
let hashOfRandomNumbers = createHashedValues(randomArray);

function findDuplicate (hashOfRandomNumbers){ 
  //return the key whos value is > 1
  var key; 
  for (key in hashOfRandomNumbers){ 
    value = hashOfRandomNumbers[key] > 1; 
    if (value){
      return key;
    }
  }
}

function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1)) + 1;
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function createRandomizedArrayOfNums (limit, numberToFind) {
  let array1 = [];
    for (let i=1; i <= limit; i++) {
        array1.push(i);
    }
  array1.push(numberToFind);
  shuffle(array1);
  return array1;
}

module.exports = { createHashedValues, findDuplicate };

