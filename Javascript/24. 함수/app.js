// function printHeart() {
//     console.log('<3');
// }

// printHeart();

// function rant(message) {
//     for (let i = 0; i < 3; i++) {
//         console.log(message.toUpperCase());
//     }
// }

// rant('I hate beets');


// function isSnakeEyes(dice1, dice2) {
//     if (dice1 === dice2) {
//         console.log('Snake Eyes!');
//     }
//     else {
//         console.log('Not Snake Eyes!');
//     }
// }

// isSnakeEyes(1, 1);
// isSnakeEyes(1, 5);
// isSnakeEyes(4, 5);

// function repeatGreetings(message, repeatTimes) {
//     for (let i = 0; i < repeatTimes; i++) {
//         console.log(message);
//     }
// }

// repeatGreetings('Hi', 5);


// function add(num1, num2) {
//     let res;
//     if (typeof(num1) !== 'number' || typeof(num2) !== 'number' ) {
//         res = false;
//         console.log(res);
//         return res;
//     }
//     else {
//         res = num1 + num2;
//         console.log(res);
//         return res; 
//     }
// }

// add(1, 5);
// add('a', 1);

// function multiply(num1, num2) {
//     let res;
//     res = num1 * num2;
//     return res;
// }

// console.log(multiply(2, 3));

// let ar = [];
// console.log(ar.length);

// function lastElement(array) {
//     if(array.length !== 0) {
//         return array[array.length-1];
//     } else {
//         return null;
//     }
    
// }

// console.log(lastElement([3, 5, 7]));
// console.log(lastElement([]));


// function capitalize(word) {
//     return word[0].toUpperCase() + word.slice(1, word.length);
// }

// console.log(capitalize('eggplant'));

// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3]));

function returnDay(number) {
    dayList = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5:'Friday', 6:'Saturdady', 7:'Sunday'};
    if (number > 7 || number < 1) {
        return null;
    } else {
        return dayList[number];
    }
}

console.log(returnDay(3));