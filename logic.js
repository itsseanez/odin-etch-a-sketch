//Create 2d array
const rows = 16;
const cols = 16;
let gridArray= new Array(rows);
for(let i=0; i < rows; i++) {
    gridArray[i] = new Array(cols);
}

//Create grid on page
function gridPage(gridArray) {
    for(let i=0; i<gridArray.length; i++) {
        for(let j=0; j<gridArray[i].length; j++) {
            const container= document.querySelector('#container');
            const block= document.createElement('div')
            block.classList.add('block');
            container.appendChild(block);
        }
    }
}

//Changes div color
function colorChange(element) {
    element.classList.add('hover');
}

//Add hover effect event listener to change div color
window.onload=function(){
    const divBlock= document.querySelector('.block');
    divBlock.addEventListener('mouseover', colorChange(divBlock));
}

gridPage(gridArray);
