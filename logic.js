//Ask user size of grid
const sizeButton=document.getElementById('size');
sizeButton.addEventListener('click', function(event) {
    let userSize=prompt('Grid Size:');
    const size = +userSize;

    //Resize grid
    const grid=document.getElementById('container');
    grid.style.width=(16*size)+'px';
    grid.style.height=(16*size)+'px';

    //Create 2d array
    let gridArray= new Array(size);
    for(let i=0; i < size; i++) {
        gridArray[i] = new Array(size);
    }

    gridPage(gridArray);
});

//Create grid on page
function gridPage(gridArray) {
    for(let i=0; i<gridArray.length; i++) {
        for(let j=0; j<gridArray[i].length; j++) {
            const container= document.querySelector('#container');
            const block= document.createElement('div')
            block.classList.add('block');
            block.addEventListener('mouseenter', function(event) {
                block.classList.add('hover');
            });
            container.appendChild(block);
        }
    }
}
