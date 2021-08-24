// https://www.codewars.com/kata/57f8842367c96a89dc00018e/train/javascript

/* You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

Finally, if one of two animals are not present, return "boring without two animals".

Examples
moves = 5

map =
..C......
.........
....m....

returns "Caught!" because the cat can catch the mouse in 4 moves
moves = 5

map =
.C.......
.........
......m..

returns "Escaped!" because the cat cannot catch the mouse in  5 moves */

function getIndexOfK(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(k);
        if (index > -1) {
            return [i, index];
        }
    }
}

function catMouse(map, moves) {
    let arr = map.split("\n").map(elem => elem.split(''));
    let cat = getIndexOfK(arr, 'C');
    let mouse = getIndexOfK(arr, 'm');

    if (cat === undefined || mouse === undefined) {
        return "boring without two animals";
    } else if ((Math.abs(mouse[0] - cat[0]) + Math.abs(mouse[1] - cat[1])) > moves) {
        return "Escaped!"
    } else return "Caught!"
}