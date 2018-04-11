let Imjs = require("immutable")

// Arrays

//Defining an immutable array
let zoo = Imjs.List.of('Tiger', 'Zebra', 'Lion')

let birdZoo= zoo.push('bird')
//we add birds to the zoo in a new array

console.log("size of original zoo:", zoo.size)
// we can see that the size of the original zoo has not changed

console.log("size of Zoo with birds:", birdZoo.size)
// the bird zoo has a size of 4
console.log("birds are now in our zoo:", birdZoo.get(3))

//we can convert an immutable data set to regular javascript as well
let zooJs= zoo.toJS()
// console.log("JS array of zoo",zooJs)