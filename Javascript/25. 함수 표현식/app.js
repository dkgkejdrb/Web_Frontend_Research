// const add = function(x, y) {
//     return x + y;
// }

// // 3
// console.log(add(1, 2));

// const square = function(num) {
//     return num * num;
// }

// console.log(square(4));

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// // 고차 함수 정의
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// callTenTimes(rollDie);


// function makeBetweenNum(min, max) {
//     return function(num) {
//         return num >= min && num <= max;
//     }
// }

// const isAdult = makeBetweenNum(19, 64);
// const isSenior = makeBetweenNum(65, 120);

// // false
// console.log(isAdult());
// // true
// console.log(isAdult(20));
// // false
// console.log(isAdult(18));


// // false
// console.log(isSenior());
// // false
// console.log(isSenior(121));
// // true
// console.log(isSenior(120));

// const myMath = {
//     PI: 3.141592,

//     // 객체에 종속된 함수 == 메서드
//     square: function (num) {
//         return num*num;
//     },

//     // 메서드는 function 키워드를 생략할 수 있음
//     cube(num) {
//         return num ** 3;
//     },
// }

// let myPI = myMath.PI;
// let mySqaure = myMath.square(5);
// let myCube = myMath.cube(6);

// // 3.141592 25 216
// console.log(myPI, mySqaure, myCube);


// const square = {
//     area: function(side) {
//         return side * side;    
//     },
//     perimeter(side) {
//         return side * 4;
//     }
// }

// console.log(square.area(10));
// console.log(square.perimeter(10));

// const person = {
//     first: 'Dong Kyoo',
//     last: 'Lee',
//     fullName: function() {
//         // 에러
//         // console.log(first, last);

//         // this 키워드로 객체(person)을 통해 다른 속성(first, last)에 각각 접근
//         console.log(this.first, this.last);
//     }
// }

// // Dong Kyoo Lee
// person.fullName();


// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount += 1;
//         return 'EGG';
//     }
// }

// console.log(hen.name); // "Helen"
// console.log(hen.eggCount); // 0
// console.log(hen.layAnEgg()); // "EGG"
// console.log(hen.layAnEgg()); // "EGG"
// console.log(hen.eggCount); // 2


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function(el) {
//     console.log(el);
// })

// numbers.forEach(function(el){
//     if (!(el % 2))  console.log(el);
// })


// const moives = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     }
// ]

// moives.forEach(function(movie) {
// // Amadeus - 99 / 10
// // Stand By Me - 85 / 10
// // Parasite - 95 / 10
//     console.log(`${movie['title']} - ${movie['score']} / 10`)
// })

// const numbers = [1, 2, 3, 4, 5, 6];

// // 배열(numbers)의 요소를 변경하지는 않음.
// numbers.map(function(number) {
//     return number * 2;
// })

// // 배열(numbers)에서 반환값을 변수(new_numbers)에 맵핑.
// const doubles = numbers.map(function(number){
//     return number * 2;
// })

// console.log(doubles);


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     }
// ]

// const new_movies = movies.map(function(movie){
//     return `${movie['title']} - ${movie['score']} / 10`;
// })

// console.log(new_movies);


// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function(names){
    return `${names['first']}`;
})

console.log(firstNames);