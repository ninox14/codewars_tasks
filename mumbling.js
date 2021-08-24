// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function accum(str) {
    let buffer = [];
    let answer = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= i; j++) {
            buffer.push(str[i].toLowerCase());
        }
        answer.push(capitalizeFirstLetter(buffer.join("")));
        buffer = [];
    }
    return answer.join('-');
}