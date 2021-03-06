let Imjs = require("immutable");

// Defining an Immutable Array
let sClass = Imjs.List.of(
  "Genos",
  "Metal Bat",
  "Tatsumaki",
  "Blast",
  "King",
  "Bang"
);

// Splicing  Sclass to replace kind with saitama at index 4
let noKing = sClass.splice(4, 1, "Saitama");

console.log("Replaced King with Saitama", noKing);
console.log("=============");
console.log("We can see that sClass has not changed", sClass);
