let grid = document.createElement("table");
grid.appendChild(document.createElement("tr"));
console.log(grid);
ex = 0;
let divy = document.createElement('div');
const cells = new Array(0,1,2,3);
class Algo{

};

class Cells{
    constructor(id){
        this.id = id;
    }
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
        const celly = new Cells(newCell.id);
        console.log(celly);
        grid.appendChild(newCell);}
};
divy.id = 'id="Diva"';
divy.appendChild(grid);
document.body.appendChild(divy)