var friends = require("./data/friends.js")

var newFriend =     {
    name:"Lebron",
    photo:"https://images.performgroup.com/di/library/sporting_news/11/4e/james-lebron_1wia9omipbct119f8qhexip0ci.jpg?t=-1355404918&quality=100",
    scores:[
        3,
        5,
        4,
        2,
        3,
        4,
        2,
        5,
        3,
        2
      ]
}
// Find the friend match
// function to subtract arrays and create a new one with the result    
let subtract=(arr1, arr2)=> {
    return arr2.map(function (el, i) {
        return Math.abs(el - arr1[i]);
    });
}
let add = (x,y) =>{return x+y}
console.log("==== Below is the sliced set of ingredients ====")
console.log(subtract(friends.friends[0].scores, newFriend.scores))
// this is the sliced set of ingredients

// looping the array subtraction function
let  getScoreDiff=(masterArr, arr)=>{
    return masterArr.map((el,i)=>{ 
        return subtract(el.scores, arr).reduce(add,0)
    })
}

console.log("==== Below are the sandwiches we made ====")        
console.log(getScoreDiff(friends.friends, newFriend.scores))
let getMatch= (masterArr, arr)=>{
    let bestScore = Math.min.apply(null, getScoreDiff(masterArr, arr))
    let match = getScoreDiff(masterArr, arr).indexOf(bestScore)
    return masterArr[match].name
}

console.log(getMatch(friends.friends, newFriend.scores), "is your new best friend (sandwich)")