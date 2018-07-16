let _ = require("lodash");

let addMultiply = (x, y, z) => {
  return (x + y) * z;
};
console.log("addMultiply(3,2,5): ", addMultiply(3, 2, 5));
console.log("=============");

let curryOne = _.curry(addMultiply);
console.log("curryOne(3)(2,5): ", curryOne(3)(2, 5));
console.log("=============");

console.log("*** Same call as above, more readable ***");
let startThree = curryOne(3);
console.log("startThree(2,5): ", startThree(2, 5));
//Readability for calling curryone
console.log("=============");

let curryTwo = _.curry(startThree);
let followThree = curryTwo(2);
console.log("second levelcurry", followThree(5));
