// console.log('Are you there?')

// // 3초 후 출력
// setTimeout(() => {
//     console.log("Yeah I'm here!")
// }, 3000)


// const id = setInterval(() => {
//     console.log(Math.random())
// }, 1000)

// // 콘솔에 clearInterval(id)를 입력하면, 반복 정지


// const numbers = [1, 2, 3, 4, 5, 6];

// const lowerNumbers = numbers.filter((number) => { return number < 4})
// console.log(lowerNumbers);



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


// // {title: 'Avengers', year: 2019, score: 99}
// // {title: 'Parasite', year: 2021, score: 95}
// const newestMovies = movies.filter(movie => movie['year'] > 2010)

// // {title: 'Amadeus', year: 1987, score: 34}
// const badMovies = movies.filter((movie) => movie['score'] < 50)




// function validUserNames(usernames) {
//     return usernames.filter(function(username) {
//         if (username.length < 10)   return username;
//     })
// }

// console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));
// // => ["mark", "carrie98", "MoanaFan"]




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

// // 요소에서 movie['score']가 모두 90점을 넘는지 확인
// const isAllHigher90 = movies.every((movie) => movie['score'] > 90) // => false

// // 요소에서 movie['score']가 모두 30점을 넘는지 확인
// const isAllHigher30 = movies.every((movie) => movie['score'] > 30) // => true

// // 요소에서 movie['score']가 하나라도 98점을 넘는지 확인
// const isAnyHigher98 = movies.some((movie) => movie['score'] > 98) // => true

// console.log(isAllHigher90, isAllHigher30, isAnyHigher98);



// const allEvens = (numbers) => {
//     numbers.every((num) => num % 2 == 0)
// }

// console.log(allEvens([2, 4, 6, 8]));


function allEvens(numbers) {
    return numbers.every((num) => num % 2 == 0)
}

console.log(allEvens([2, 4, 6, 8]), allEvens([1, 4, 6, 8]), allEvens([1, 2, 3]));