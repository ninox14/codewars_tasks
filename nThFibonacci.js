// **************!!!!!!!!!!UNFINISHED!!!!!!!!!!**************
/* 1st number equals 0
zero is 0 number
1st number is 1 */

// https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

/* I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. */

function nthFibo(n) {
    if (n == 1) return 0;
    else if (n == 2 || n == 1 || n == 3) return 1;
    let [a, b] = [0, 1];
    while (n-- > 0) {
        [a, b] = [b, a + b];
    }
    return b;
}
