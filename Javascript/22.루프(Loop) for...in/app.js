const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60,
}

// testScores는 not iterable이므로 for...of 사용 불가
// =================================
// for (let name of testScores) {
//     console.log(name);
// }


// testScores의 key를 순서대로 탐색
// keenan: 80
// damon: 67
// kim: 89
// shawn: 91
// marlon: 72
// dwayne: 77
// nadia: 83
// elvira: 97
// diedre: 81
// vonnie: 60
for (let name in testScores) {
    console.log(`${name}: ${testScores[name]}`);
}


let name_array = Object.values(testScores);

// 80
// 67
// 89
// 91
// 72
// 77
// 83
// 97
// 81
// 60
for (let name of name_array) {
    console.log(name);
}