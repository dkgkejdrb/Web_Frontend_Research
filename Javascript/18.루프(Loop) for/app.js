// 1: da ba dee da ba daa
// 2: da ba dee da ba daa
// 3: da ba dee da ba daa
// 4: da ba dee da ba daa
// 5: da ba dee da ba daa
// 6: da ba dee da ba daa
// 7: da ba dee da ba daa
// 8: da ba dee da ba daa
// 9: da ba dee da ba daa
// 10: da ba dee da ba daa
for (let i = 1; i <= 10; i++) {
    console.log(`${i}: da ba dee da ba daa`);
}


// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

// infinity loop! Do not try again
// ===============================
// for (let i = 20; i >= 0; i++) {
//     console.log(i);
// }


let animials = ['rabbit', 'lion', 'tiger', 'dog', 'cat', 'crocodile', 'mouse', 'monkey', 'horse'];

// 배열을 순서대로 참조
for (let i = 0; i < animials.length; i++) {
    console.log(i, animials[i]);
}

// 배열을 역순으로 참조
for (let i = animials.length-1; i >= 0; i--) {
    console.log(i, animials[i]);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}


// 0번째 줄
//     Kirsten
//     Erik
//     Namita
// 1번째 줄
//     Geoffrey
//     Juanita
//     Antonio
//     Kevin
// 2번째 줄
//     Yuma
//     Sakura
//     Jack
//     Erika
const seatingChart = [
    ['Kirsten', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika'],
];

for (let i = 0; i < seatingChart.length; i++) {
    console.log(`${i}번째 줄`);
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(`   ${seatingChart[i][j]}`);
    }
}