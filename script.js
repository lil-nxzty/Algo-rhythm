let grid = document.createElement("table");
console.log(grid);
let cellas = [];
let startStatus = "off";
let endStatus = "off";
let wallStatus = "off";
let wide = null;
let long = null;
let divy = document.createElement('div');
const starti = document.getElementById("start");
const endi = document.getElementById("end");
const walli = document.getElementById("wallmart");
class Algo{
    async displayGrid() {
        wide = await dimensionx();
        long = await dimensiony();
        for(let x = 0; x < wide; x++) {
            let teble = document.createElement('tr');
            teble.id = `${x}`;
            grid.appendChild(teble);
            for(let y = 0; y < long; y++) {
                let newCell = document.createElement("td");
                newCell.textContent = [x,y];
                newCell.id = [`${x}`+`${y}`];
                let loca = [x,y];
                const celly = new Cells(newCell, newCell.id, loca);
                console.log(celly);
                cellas.push(celly);
                teble.appendChild(newCell);
            }
        }
    };
};

class Cells{
    iswall = false;
    constructor(value, id, location){
        this.value = value;
        this.id = id;
        this.location = location;
    };
    eventi() {
    this.value.onclick = () => {
        this.iswall = true;
    };
}
};


divy.id = "Diva";
divy.appendChild(grid);
console.log(cellas);
starti.addEventListener("click", function(){for(const cell of cellas){cell.eventi()}});
/* while(startStatus == "on"){
    for(const x of cellas) {x.addEventListener("click", x.iswall = "no"), console.log(1)};
}*/
document.body.appendChild(divy);
// while(startStatus == "on"){
//     for(let i = 0; x < cellas.length; i++) {cellas[i].value.addEventListener("click", function(){console.log("Hey")})};
// }
// fix the event listener br