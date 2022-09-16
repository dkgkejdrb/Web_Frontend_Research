const aceEditor = document.querySelector('#editor .ace_scroller');
const submitBtn = document.querySelector('#submit');
const screen = document.querySelector('.screen .contents');

let msg = aceEditor.innerText;

submitBtn.addEventListener('click', () => {
    console.log(msg);
})