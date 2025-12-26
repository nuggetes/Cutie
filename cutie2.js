console.log("cutie2.js loaded");

let noCount = 0;


const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const text = document.getElementById('text2');
const img = document.getElementById('img2');

    console.log(noButton, yesButton, text, img)

noButton.addEventListener('click', () => {
 noCount++;

    img.src = 'download3.jpg';
    text.innerText = 'PHIRSE SOCH LO';

    yesButton.innerText = 'YES I LOVE YOU';

    // yes size increase
    let yesSize = 18 + noCount * 6;
    yesButton.style.fontSize = yesSize + 'px';
    yesButton.style.padding = (16 + noCount * 4) + 'px ' + (32 + noCount * 6) + 'px';

    // no size decrease
    let noSize = Math.max(10, 16 - noCount * 2);
    noButton.style.fontSize = noSize + 'px';
    noButton.style.padding = "8px 14px";

    // Move no button to random position
    if (noCount >= 4) {
        enableEscape();
    }});   

function enableEscape() {
    noButton.addEventListener('mouseenter', () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 100 - 50;

        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });
}

yesButton.addEventListener('click', () => {
    window.location.href = 'cutie3.html';
});