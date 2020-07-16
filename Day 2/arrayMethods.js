//toString()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
//join()
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits1.join(" * ");
//pop(),push()
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.pop());
console.log(fruits2.push("Kiwi"));
//shift()
console.log(fruits2.shift());
//unshift()
console.log(fruits2.unshift("Lemon"));
//indexes 
fruits2[0] = "Kiwi";
console.log(fruits2);
//delete
delete fruits2[0];
console.log(fruits2);
//splice()
fruits2.splice(2, 0, "Banana", "Kiwi");
console.log(fruits2);
//concat()
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);