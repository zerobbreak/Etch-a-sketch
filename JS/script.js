function createGrid(number) {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-item")
        container.appendChild(div);
    }
}

function changeColor(event){
    const color = document.getElementById('colorpicker').value;
    event.target.style.backgroundColor = color;
}

function eraseColor(event){
    event.target.style.backgroundColor = '';
}

function reset(){
    let gridNumber = prompt("Enter the a number not exceeding 100:");
    if(gridNumber === undefined || gridNumber === null || gridNumber === ""){
        return;
    }

    while(gridNumber > 100){
        gridNumber = prompt("Number too big! Please enter grid size less than or equal to 100: ");
    }

    const container = document.getElementById("container");
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    createGrid(gridNumber);
    let gridBoxList = document.querySelectorAll('.grid-item');
    gridBoxList.forEach(gridBox => 
        {
            gridBox.addEventListener('mouseover', changeColor)
        });
}

function clearGrid(){
    let gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(gridBox => {
        gridBox.style.backgroundColor = null;
    });
}


let gridNumber = 16;
createGrid(gridNumber);
let gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach(gridBox => {
    gridBox.addEventListener('mouseover', changeColor)
});

const clearButton = document.getElementById("clearBtn");
clearButton.addEventListener('click', clearGrid);

