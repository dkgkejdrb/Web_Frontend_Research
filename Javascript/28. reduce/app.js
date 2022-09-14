// // 배열의 총합을 구하는 함수
// const numbers = [1, 2, 3, 4, 5]

// const sum = numbers.reduce((total, number) => {
//     // number
//     console.log(typeof(total));
//     return total + number})

// // 15
// console.log(sum);


// // 배열의 최대값을 구하는 함수
// const numbers = [92, 3, 5, -1, 100, 25, 66]

// const maxNumber = numbers.reduce((tmp, number) => {
//     // number
//     console.log(typeof(tmp));
//     if (tmp < number) {
//         tmp = number;
//     }
//     return tmp;
// })

// // 100
// console.log(maxNumber);



// const movies = [
//     {
//         title: 'Amadeus',
//         year: 1987,
//         score: 34,
//     },
//     {
//         title: 'Avengers',
//         year: 2019,
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         year: 1999,
//         score: 60
//     },
//     {
//         title: 'Parasite',
//         year: 2021,
//         score: 95
//     },
// ]

// const highestRated = movies.reduce((bestMovie, currMovie) => {
//     // object
//     console.log(typeof(bestMovie));
//     if (bestMovie.score < currMovie.score) {
//         return currMovie;
//     }
//     return bestMovie;
// })

// // Avengers
// console.log(highestRated.title);


// // 배열의 총합을 구하는 함수
// const numbers = [1, 2, 3, 4, 5]

// const sum = numbers.reduce((total, number) => {
//     return total + number}, 10)

// // 25, 총합은 15이나 total이 10으로 초기화된 결과
// console.log(sum);

const person = {
    firstName: 'Dong Kyoo',
    lastName: 'Lee',
    fullName_1: function() {
        // function 함수는 자신이 종속된 객체(person)을 this로 가르킴
        console.log(this);
        return this.firstName + this.lastName;
    },
    fullName_2: () => {
        // 화살표 함수는 상위 스코프(person-전역)의 this(Window)를 가르킴
        console.log(this);
        return this.firstName + this.lastName;
    },

    // 화살표 함수(say)는 상위 스코프(fullName_3)의 this(person)을 가르킴
    fullName_3: function() {
        const say = () => this.firstName + this.lastName;
        console.log(say());
    }
}

// Dong Kyoo Lee
console.log(person.fullName_1());

// undefined
console.log(person.fullName_2());

// Dong Kyoo Lee
person.fullName_3();


function thisInFunction() {
    console.log(this);
}

// 전역 스코프의 function 함수(thisInFunction)는  
thisInFunction();

