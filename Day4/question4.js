var num1 = prompt("Enter first number");
var num2 = prompt(" Enter second number");
var operation = prompt("Enter operation")
var opp = operation;
switch (opp) {
    case opp = add:
        let add = num1 + num2;
        console.log(`addition of two number is ${add}`);
        break;
    case opp = sub:
        let sub = num1 - num2;
        console.log(`Subtraction of two number is ${sub}`);
        break;
    case opp = multiply:
        let multiply = num1 * num2;
        console.log(`Multiplication of two number is ${multiply}`);
        break;
    case opp = div:
        let div = num1 / num2;
        console.log(`Division of two number is ${div}`);
        break;
    case opp = square:
        let Square_root = Math.sqrt(num1);
        console.log(`Squareroot of given number is ${Square_root}`);
        break;
    default:
        let power = Math.pow(num1, 2);
        console.log(`Pwer of number is ${power}`);
        break;
}