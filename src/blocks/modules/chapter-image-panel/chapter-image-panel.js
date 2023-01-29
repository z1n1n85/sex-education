'use strict'

const txtPanel = document.querySelector('.chapter-text-container');
const imgPanel = document.querySelector('.chapter-image-panel');
const chapterImgs = Array.from(document.querySelectorAll('img'));

let imgsWithAnchors = new Map();

chapterImgs.forEach(function(item, i, arr){
    imgsWithAnchors.set(item.previousElementSibling, item);
});

for (let [key, value] of imgsWithAnchors){
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('chapter-img-container')
    let imgAnnot = document.createElement('p');
    imgAnnot.textContent = `${value.alt}`;
    txtPanel.removeChild(value);
    imgContainer.append(value);
    imgContainer.append(imgAnnot);
    imgPanel.appendChild(imgContainer);
    imgsWithAnchors.set(key, imgContainer);
}

const updateImgsPos = () => {
    let extraIndent = 0;
    let imgCordY = 0;
    let prevImgHeight = 15;
    for (let [key, value] of imgsWithAnchors){
        imgCordY = key.offsetTop - extraIndent;
        value.style.marginTop = `${imgCordY}px`;
        value.style.top = `${prevImgHeight}px`;
        console.log(`${key.offsetTop}, ${value.offsetTop}, ${value.offsetHeight}, ${extraIndent}`);
        prevImgHeight += value.offsetHeight + 15;
        extraIndent = 0 + key.offsetTop + value.offsetHeight;
    }
}

window.addEventListener('resize', updateImgsPos);

updateImgsPos();