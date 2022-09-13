let maximum = parseInt(prompt('Enter the maximum number!'));

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt('What is my number?');
while (targetNum != guess) {
    if (guess == 'q') break;
    if (targetNum > guess) {
        guess = parseInt(prompt('UP!'));
    }
    else {
        guess = parseInt(prompt('DOWN!'));
    }
}
console.log("Congulaturations!");