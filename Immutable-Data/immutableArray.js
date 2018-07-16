let Imjs = require("immutable");

//Defining an immutable array, or list
let zoo = Imjs.List.of("Tiger", "Zebra", "Lion");

let birdZoo = zoo.push("bird");
// create a new array based on zoo that includes bird

console.log("original zoo:", zoo);
// we can see that the size of the original zoo has not changed
console.log("=============");

console.log("zoo copy with birds:", birdZoo);
// the bird zoo has a size of 4
console.log("=============");

//we can convert an immutable data set to regular javascript as well
let zooJs = zoo.toJS();
console.log("JS array of zoo", zooJs);
