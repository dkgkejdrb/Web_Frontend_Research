// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// // ['red', 'orange']
// console.log(colors.slice(0, 2));

// // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// console.log(colors);

// // ['violet']
// console.log(colors.slice(-1));

// // ['blue', 'indigo', 'violet']
// console.log(colors.slice(-3));

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let days = ['Monday', 'Wednesday'];

// 1번째 인덱스부터 2개의 요소 제거
colors.splice(1, 2);
// 'red', 'green', 'blue', 'indigo', 'violet']
console.log(colors);

// 0번째 인덱스부터 3개의 요소 제거
colors.splice(0, 3);
// ['indigo', 'violet']
console.log(colors);

// 1번째 인덱스부터 0개의 요소 제거. 즉 제거하지 않음.
days.splice(1, 0);
console.log(days);

// 1번째 인덱스부터 Tuesday 요소 추가
days.splice(1, 0, 'Tuesday');
console.log(days);

// 1번째 인덱스부터 2개의 요소 제거하고 Sunday 요소 추가
days.splice(1, 2, 'Thursday', 'Sunday');
console.log(days);

const numbers = [-12, 0, 1, 1000, 24, 355, 41];

numbers.sort();
// [-12, 0, 1, 1000, 24, 355, 41]
console.log(numbers);