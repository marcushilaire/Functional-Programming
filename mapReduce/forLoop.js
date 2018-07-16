var friends = require("./data/friends.js");

var newFriend = {
  name: "Lebron",
  photo:
    "https://images.performgroup.com/di/library/sporting_news/11/4e/james-lebron_1wia9omipbct119f8qhexip0ci.jpg?t=-1355404918&quality=100",
  scores: [3, 5, 4, 2, 3, 4, 2, 5, 3, 2]
};

// Find the friend match
var scoreDifference = [];
// function to subtract arrays and create a new one with the result
function subtract(arr1, arr2) {
  return arr2.map(function(el, i) {
    return Math.abs(el - arr1[i]);
  });
}
// console.log(subtract(friends.friends[0].scores, friends.friends[1].scores))

// looping the array subtraction function
for (var i = 0; i < friends.friends.length; i++) {
  var x = subtract(friends.friends[i].scores, newFriend.scores).reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  scoreDifference.push(parseInt(x));
}
// console.log(scoreDifference)
var bestScore = Math.min.apply(null, scoreDifference);
// console.log(bestScore)
var match = scoreDifference.indexOf(bestScore);
console.log(friends.friends[match].name, "is your new best friend");
// ===================The code that was used to apply my logic for friend finder homework
