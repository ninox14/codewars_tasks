// https://www.codewars.com/kata/59a1ec603203e862bb00004f/train/javascript

/* The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

eg:-

original number =2997 , n=3
2997 = 222+999+999+777 and here each digit is concatenated three times.

original number=-2997 , n=3

-2997 = -222-999-999-777 and here each digit is concatenated three times.

Write afunction named check_concatenated_sum that tests if a number has this generalized property. */

function checkConcatenatedSum(x, n) {
    x = Math.abs(x);

    let repeatDigit = d => +(d.toString().repeat(n));
    let arr = Array.from(x.toString()).map(Number);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = repeatDigit(arr[i]);
    }
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum == x
}