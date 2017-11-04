// write an algorithm that determines the following data points by only
// iterating over the data one time total:
// - biggest number
// - smallest number
// - sum of all numbers
// - average of all numbers
// - quantity of numbers

// for each version
function calculateStats(numberList){
  //create stats hash initializing property values to zero
  let stats = {
    maxValue: 0,
    minValue: 0,
    total: 0,
    quantity: 0,
  };

  //numberList.forEach(function (num) {
  numberList.forEach(num => {
    stats.maxValue = Math.max(stats.maxValue, num);
    stats.minValue = Math.min(stats.minValue, num);
    stats.total += num;
    stats.quantity += 1;
  });
  stats.average = stats.total / stats.quantity;
  return stats;
}

function sum(a, b) {
  return a + b;
}

function diff(a,b) {
  return a - b;
}
module.exports = { sum: sum, diff: diff, calculateStats: calculateStats }


//reduce version
//function calculateStats(numberList){
  //let stats = numberList.reduce(
    //function(runningStats, currentValue){
      //runningStats.maxValue = Math.max(runningStats.maxValue, currentValue);
      //runningStats.minValue = Math.min(runningStats.minValue, currentValue);
      //runningStats.total += currentValue;
      //runningStats.quantity += 1;
      //return runningStats;
    //},
    //{
      //maxValue: 0,
      //minValue: 0,
      //total: 0,
      //quantity: 0,
    //}
  //)
  //stats.average = stats.total / stats.quantity;
  //return stats;
//}

