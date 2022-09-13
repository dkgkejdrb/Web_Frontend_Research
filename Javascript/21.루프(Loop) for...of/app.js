// String
for (let word of "HELLO") {
    console.log(word);
}

// Array
for (let num of [1, 2, 3, 4]) {
    console.log(num);
}


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika'],
];

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers) {
    console.log(num**2);
}