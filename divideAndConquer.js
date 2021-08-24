// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

/* Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number. */

function divCon(x) {
    let numbers = [];
    let stringers = [];

    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number') {
            numbers.push(x[i]);
        } else {
            stringers.push(x[i]);
        }
    }
    return numbers.reduce((a, b) => a + b, 0) - stringers.reduce((a, b) => +a + +b, 0)
}