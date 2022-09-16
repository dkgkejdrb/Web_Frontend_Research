const zoomInBtn = document.querySelector('#zoomController .zoom_in');
const zoomOutBtn = document.querySelector('#zoomController .zoom_out');
const zoomText = document.querySelector('#zoomController .zoom_percentage');
const tutorialHeader = document.querySelector('.left__tutorial .title_2');
const tutorialContents = document.querySelector('.left__tutorial .contents');
const codeEditor = document.querySelector('#editor');

// zoom('DOM: Array', '초기폰트크기: Array')
// '초기폰트크기'의 단위는 'rem'
class zoom {
    constructor(target = [], initFontSize = []) {
        this.target = target;
        this.initFontSize = initFontSize;
    }

    zoomStep = 1;
    currFontSize = [];
    currZoomPer;
    
    in = () => {
        if (this.zoomStep > 4)   return;
        this.zoomStep += 0.1;
        this.show();
    }

    out = () => {
        if (this.zoomStep < 0.8)   return;
        this.zoomStep -= 0.1;
        this.show();
    }

    show = () => {
        // fontSize => rem 단위로 변경
        this.currFontSize = this.initFontSize.map((el) => {
            return (el * this.zoomStep).toFixed(2).toString() + 'rem';
        })

        let i = 0;
        this.target.forEach((el) => {
            el.style.fontSize = this.currFontSize[i];
            i++;
        })

        this.currZoomPer = Math.floor(this.zoomStep * 100).toString() + '%';
        zoomText.innerText = this.currZoomPer;        
    }
}

let zoomController = new zoom([tutorialHeader, tutorialContents, codeEditor], [1.5, 0.875, 1.5]);

zoomInBtn.addEventListener('click', () => {
    zoomController.in();
})

zoomOutBtn.addEventListener('click', () => {
    zoomController.out();
})