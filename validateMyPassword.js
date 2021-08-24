// https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript

/* I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers. */

function validPass(password) {
    let res = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/.test(password)
    if (res) return 'VALID'
    else return 'INVALID'
}