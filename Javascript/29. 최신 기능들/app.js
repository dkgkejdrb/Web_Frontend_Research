// const greeting = (name, words = 'hello') => console.log(`${name}, ${words}!!`);

// // Michael, hello!!
// greeting('Michael');

// // Leo, how are you?!!
// greeting('Leo', 'how are you?')

// // undefined, hello!!
// greeting();

// // Nice to meet you, hello!!
// greeting('Nice to meet you');

// nums = [1, 2, 3, 4, 5];
// // 1 2 3 4 5
// console.log(...nums);

// city = 'Seoul';
// // S e o u l
// console.log(...city);


// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const conNum = [...num1, ...num2, 7];

// // [1, 2, 3, 4, 5, 6, 7]
// console.log(conNum);


const feline = { legs: 4, family: 'Felidae'};
const canine = { family: 'Caninae', furry: true};

// 스프레드를 통한 객체 복사와 확장
// {family: 'Caninae', furry: true, isPet: true}
const dog = { ...canine, isPet: true};
// {legs: 4, family: 'Felidae', genus: 'Panthera'}
const lion = { ...feline, genus: 'Panthera'};


// 스프레드를 통한 객체 복사와 결합
// {legs: 4, family: 'Caninae', furry: true}
const catDog = { ...feline, ...canine};