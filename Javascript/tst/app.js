// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         alert (name); // displayName() uses variable declared in the parent function    
//     }
//     displayName();    
// }
// init();


// function init() {
//     let word = 'Fire';
//     // Fire, 중첩함수의 부모함수(상위스코프)의 변수를 참조할 수 있음 
//     function showWord() {
//         console.log(word); 
//     }
//     showWord();
// }
// init();


// const row = document.querySelectorAll('.row');

// const showAlphabet = (alphabets = []) => {
    
//     // changeAlphabet을 공유하고 싶음
//     const changeAlphabet = alphabets.map((el)=> {
//         return el + '!'
//     })

//     let i = 0;
//     const show = () => {
//         row.forEach((el) => {
//             el.innerText = changeAlphabet[i]; // a!, b!, d! 표시
//             i++;
//         })
//     }
//     show();
// }

// showAlphabet(['a', 'b', 'd']);


// 익명함수를 사용하여 클로저 체이닝한 예
const sum1 = (a) => {
    return (b) => {
        return (c) => {
            return (d) => {
                return a + b + c + d;
            }
        }
    }
}

 console.log(sum1(1)(2)(3)(4))


 // 익명함수 없이 클로저 체이닝한 예
 const mul1 = (a) => {
    return mul2 = (b) => {
        return mul3 = (c) => {
            return mul4 = (d) => {
                return a * b * c * d;
            }
        }
    }
 }

//  // 에러
//  console.log(mul1(a)(b)(c)(d));

const M1 = mul1(1);
const M2 = M1(2);
const M3 = M2(3);
const M4 = M3(4);
console.log(M4);