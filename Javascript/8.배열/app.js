// JS의 배열은 데이터타입과 관계없이 grouping 가능
let arr1 = [1, 'korea', true, NaN, undefined, null];

// JS의 배열은 리스트가 아님
console.log(arr1[-1]); // undefined 에러 출력


const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; 

leaderboard[1] = 'Luna';
leaderboard[leaderboard.length - 1] = 'Draco';

console.log(leaderboard);