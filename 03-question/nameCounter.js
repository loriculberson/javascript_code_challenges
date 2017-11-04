// write code that turns this list of names:
//const nameList = ['bob', 'susan', 'james', 'susan', 'james', 'susan']

// into a hash that looks like this:
//const expectedResult = {
    //bob: 1,
    //susan: 3,
    //james: 2
//}
function countNames(list){
  let namesHash = {};
  list.forEach(name => {
    if (!namesHash.hasOwnProperty(name)){
      namesHash[name] = 0;
    } 
      namesHash[name] += 1;
  });
  return namesHash;
}

module.exports = { countNames };
