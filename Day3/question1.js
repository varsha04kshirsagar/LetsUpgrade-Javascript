function isEvenOrOdd(val) {
    if (val % 2 === 0) {
        console.log(val + " is even");
    } else {
        console.log(val + " is odd");
    }
}

var value = prompt("Enter your value")

var number = isEvenOrOdd(value);