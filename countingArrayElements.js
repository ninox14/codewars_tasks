// https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript

/* Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john'])
#=> { 'james': 2, 'john': 1} */

function count(array) {
    const counts = {};
    for (const num of array) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts
}