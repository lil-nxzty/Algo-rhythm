let grid = document.createElement("table");
grid.appendChild(document.createElement("tr"));
console.log(grid);
ex = 0;
let cellas = [];
let startStatus = "off";
let endStatus = "off";
let wallStatus = "off";
let divy = document.createElement('div');
const cells = new Array(0,1,2,3);
const starti = document.getElementById("start");
const endi = document.getElementById("end");
const walli = document.getElementById("wallmart");
class Algo{

};

class Cells{
    iswall = "fortnite";
    constructor(value, id){
        this.value = value;
        this.id = id;
    };
};

for(let x = 0; x < cells.length; x++) {
    for(let y = 0; y < cells.length; y++) {
        let newCell = document.createElement("td");
        if(ex !== x) {
            ex++;
            grid.appendChild(document.createElement('tr'));

        }
        newCell.textContent = [x,y];
        newCell.id = [`${x}`+`${y}`];
        const celly = new Cells(newCell, newCell.id);
        console.log(celly);
        cellas.push(celly);
        grid.appendChild(newCell);}
};
divy.id = 'id="Diva"';
divy.appendChild(grid);
console.log(cellas);
starti.addEventListener("click", function(){startStatus = "on"})
/* while(startStatus == "on"){
    for(const x of cellas) {x.addEventListener("click", x.iswall = "no"), console.log(1)};
}*/
cellas[0].value.addEventListener("click", function(){cellas[0].value.iswall = "NO"})
document.body.appendChild(divy)

// You are referencing an item without using the actual cell, so clicking something logical without a physical interface will simply not be possible