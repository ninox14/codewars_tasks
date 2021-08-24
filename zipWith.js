// **************!!!!!!!!!!UNFINISHED!!!!!!!!!!**************
/* almost finished like 95%
retarded output on sanity check as far as i remember*/

// https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

/* Implement zipWith
zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
Input validation
Assume all input is valid. */

function zipWith(fn, arr1, arr2) {
    let res = [];
    console.log(fn, arr1, arr2)
    while (arr1.length != 0 && arr2.length != 0) {
        let x = arr1.shift();
        let y = arr2.shift();
        res.push(fn(x, y));
    }

    return res
}