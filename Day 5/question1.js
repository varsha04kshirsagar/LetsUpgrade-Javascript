function countBy(arr, fn) {
    let oddCount = 0
    let evenCount = 0
    return arr.reduce(function(acc, nums) {
        // console.log(nums);
        console.log(nums, fn(nums))
        if (fn(nums) === "even") {
            evenCount++;
            acc['even'] = evenCount;
        } else {
            oddCount++;
            acc['odd'] = oddCount;
        }
        return acc
    }, {}, 0)

}

function evenOdd(n) {
    if (n % 2 === 0) return "even";
    else return "odd";
}
var nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }