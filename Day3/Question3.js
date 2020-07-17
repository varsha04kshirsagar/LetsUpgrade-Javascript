var marks = prompt("Enter student score");
//using if else statement
/*function grade(val) {
    if (val >= 95) {
        console.log(`Marks are ${val} and grade is A+`);
    } else if (85 <= val < 95) {
        console.log(`Marks are ${val} and grade is A`);
    } else if (75 <= val < 85) {
        console.log(`Marks are ${val} and grade is B+`);
    } else if (65 <= val < 75) {
        console.log(`Marks are ${val} and grade is B`);
    } else if (55 <= val < 65) {
        console.log(`Marks are ${val} and grade is C`);
    } else if (45 <= val < 55) {
        console.log(`Marks are ${val} and grade is D `);
    } else {
        console.log(`Marks are ${val} and grade is pass`);
    }
}
var score = grade(marks);
console.log(score);*/
//using switch statement
var val = marks;
switch (val) {
    case val >= 95:
        console.log(`Marks are ${val} and grade is A+`);
        break;
    case 85 <= val < 95:
        console.log(`Marks are ${val} and grade is A`);
        break;
    case 75 <= val < 85:
        console.log(`Marks are ${val} and grade is B+`);
        break;
    case 65 <= val < 75:
        console.log(`Marks are ${val} and grade is B`);
        break;
    case 55 <= val < 65:
        console.log(`Marks are ${val} and grade is C`);
        break;
    case 45 <= val < 55:
        console.log(`Marks are ${val} and grade is D `);
        break;
    case 35 <= val < 45:
        console.log(`Marks are ${val} and grade is Pass`);
        break;
    default:
        console.log(`Marks are ${val} and grade is Fail`);

}

//