// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


const passWord = '3663';

let guess = prompt('비밀번호를 입력해주세요.');
while(passWord != guess) {
    guess = prompt('비밀번호가 틀렸습니다. 다시 입력해주세요.');
}
console.log('Logged In');