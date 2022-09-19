const aceEditor = document.querySelector('#editor .ace_scroller');
const submitBtn = document.querySelector('#submit');
const screen = document.querySelector('.screen .contents');

let app = new PIXI.Application({ width: 640, height: 360 });


submitBtn.addEventListener('click', () => {
    let msg = aceEditor.innerText;
    screen.innerText = msg;

    // document.body.appendChild(app.view);
})