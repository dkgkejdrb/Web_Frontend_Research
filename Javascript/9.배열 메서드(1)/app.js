// fruit = [];

// fruit.push('apple');
// fruit.push('orange');
// fruit.push('pineapple');
// fruit.push('melon');

// fruit.pop();
// fruit.pop();

// console.log(fruit);

// fruit.unshift('mango');
// fruit.unshift('strawberry');

// console.log(fruit);

// fruit.shift();

// console.log(fruit);


let cat = ['black', 'white', 'brown'];
let dog = ['big', 'middle', 'small'];

let comboParty = cat.concat(dog);
// ['black', 'white', 'brown']
console.log(cat);

// ['black', 'white', 'brown', 'big', 'middle', 'small']
console.log(comboParty);

// 4
console.log(comboParty.indexOf('middle'));

// true, false
console.log(`${comboParty.includes('small')}, ${comboParty.includes('red')}`);

comboParty.reverse();
// ['small', 'middle', 'big', 'brown', 'white', 'black']
console.log(comboParty);