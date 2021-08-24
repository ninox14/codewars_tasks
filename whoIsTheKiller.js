// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

/* Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill'] */

function killer(suspectInfo, dead) {
    for (let prop in suspectInfo) {
        if (suspectInfo[prop].some(i => dead.includes(i))) {
            return prop
        }
    }
}