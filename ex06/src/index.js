const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirtsTwo(list) {
    "use strict"

    const [a, b, ...array2] = list; 
    
    return array2;
    
}

console.log(removeFirtsTwo(array1));
module.exports = removeFirtsTwo;