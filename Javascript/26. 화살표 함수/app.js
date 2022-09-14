// const add = function(x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// console.log(add(10, 2));

// const rollDie = (reapeatTime) => {
//     for (let i = 0; i < reapeatTime; i++)   console.log(Math.floor(Math.random() * 6) + 1); 
// }

// rollDie(5);


// const greet = (name) => {
//     console.log(`Hey ${name}!`);
// }

// greet('Hagrid');


const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (x, y) => x + y;
console.log(add(1, 2));