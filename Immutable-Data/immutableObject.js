let Imjs = require("immutable")

//Defining an immutable object, or map
let obj = Imjs.Map({
    "Greeting": "Hello",
    "Name": "Jason"
});

//create a new object based on obj where the Greeting is "Hey"
let obj2 = obj.set("Greeting", "Hey")
// create a new object based on obj where the Name is "Kyle"
let obj3 = obj.set("Name", "Kyle")

let meet = (greeting, name)=>{
    return `${greeting} ${name}`
}
// Examples of how pure functions may interract with an immutable data structure
console.log("Original obj:", meet(obj.get("Greeting"),obj.get("Name")))
console.log("=============")
console.log("Copied obj's:",meet(obj2.get("Greeting"), obj3.get("Name")))