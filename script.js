let grid = document.createElement("table");
document.getElementById("gMaker").addEventListener("click", () => {
    BSF.makeGrid();
});
document.getElementById("runner").addEventListener("click", () => {
    BSF.runAlgo();
});
console.log(grid);
let cellas = [];
let celulo = [];
let startStatus = null;
let endStatus = null;
let wide;
let found;
let long;
let modo = null;
let divy = document.createElement('div');
const starti = document.getElementById("start");
const endi = document.getElementById("end");
const walli = document.getElementById("wallmart");
class Algo{
    children =[]; 
    makeGrid() {
        grid.innerHTML = "";
        cellas = [];
        wide = parseInt(document.getElementById("widi").value);
        long = parseInt(document.getElementById("lengthi").value);
        if(!wide){wide = 10}
        if(!long){long = 10};
        for(let y = 0; y < wide; y++) {
            let row = [];
            let teble = document.createElement('tr');
            teble.id = `${y}`;
            grid.appendChild(teble);
            for(let x = 0; x < long; x++) {
                let newCell = document.createElement("td");
                newCell.textContent = `${x},${y}`;
                newCell.id = `${x}-${y}`;
                const celly = new Cells(newCell, newCell.id, x, y);
                row.push(celly);
                teble.appendChild(newCell);
            }
            cellas.push(row);
        };
        document.getElementById("gMaker").innerHTML = "Remake grid";
    };
    runAlgo() {
        if(startStatus === null || endStatus === null){
            return;
        }
        celulo = [];
        for (let row of cellas) {
            for (let cell of row) {
                cell.parent = null;
                if (cell !== startStatus && cell !== endStatus && !cell.iswall) {
                    cell.value.style.backgroundColor = "";
                }
            }
        }
        startStatus.parent = startStatus;
        celulo.push(startStatus);
        while(celulo.length > 0) {
            if (found) break;
            const current = celulo.shift();
            current.runForrest(found, () => found = true);
        }
    }
};
const BSF = new Algo();

class Cells{
    parent = null;
    iswall = false;
    constructor(value, id, x, y){
        this.value = value;
        this.id = id;
        this.x = x;
        this.y = y;
        this.value.onclick = () => {
            if(modo === "start"){
                if(startStatus === null){
                    startStatus = this;
                    this.value.style.backgroundColor = "green";
                    console.log(`Start is ${startStatus}`);
                }
                else if (startStatus === this){
                    startStatus = null;
                    this.value.style.backgroundColor = "";
                    console.log(`Start is ${startStatus}`);
                };
            }
            else if(modo === "end") {
                if(endStatus === null && startStatus !== this){
                    endStatus = this;
                    this.value.style.backgroundColor = "red";
                    console.log(`End is ${endStatus}`);
                }
                else if (endStatus === this){
                    endStatus = null;
                    this.value.style.backgroundColor = "";
                    console.log(`End is ${endStatus}`);
                };
            }
            else if(modo === "wall") {
                if(endStatus !== this && startStatus !== this && this.iswall === false){
                    this.iswall = true;
                    this.value.style.backgroundColor = "black";
                    console.log(`${this} is ${this.iswall}`);
                }
                else if (this.iswall === true){
                    this.iswall = false;
                    this.value.style.backgroundColor = "";
                    console.log(`${this} is ${this.iswall}`);
                };
            }
        };
    };
    
    runForrest(found, setFound) {
        if (found) return;
        if (this.x + 1 < long) {
            if(cellas[this.y][this.x+1] !== startStatus && cellas[this.y][this.x+1].iswall === false /*Checks if next is start or wall*/){
                if(cellas[this.y][this.x+1] !== endStatus){
                    const xfriend = cellas[this.y][this.x+1];
                    if (xfriend.parent === null) {
                        xfriend.parent = this;
                        xfriend.value.style.backgroundColor = "lightblue";
                        celulo.push(xfriend);
                    };
                }
                else if (cellas[this.y][this.x+1] === endStatus){endStatus.parent = this; setFound();
endStatus.nvmcomebackforrest()}
            }
        };
        if (this.x - 1 >= 0) {
            if(cellas[this.y][this.x-1] !== startStatus && cellas[this.y][this.x-1].iswall === false /*Checks if next is start or wall*/){
                if(cellas[this.y][this.x-1] !== endStatus){
                    const xfriend = cellas[this.y][this.x-1];
                    if (xfriend.parent === null) {
                        xfriend.parent = this;
                        xfriend.value.style.backgroundColor = "lightblue";
                        celulo.push(xfriend);
                    }
                }
                else if (cellas[this.y][this.x-1] === endStatus){endStatus.parent = this; setFound();
endStatus.nvmcomebackforrest()}
            }
        };
        if (this.y + 1 < wide) {
            if(cellas[this.y+1][this.x] !== startStatus && cellas[this.y+1][this.x].iswall === false /*Checks if next is start or wall*/){
                if(cellas[this.y+1][this.x] !== endStatus){
                    const xfriend = cellas[this.y+1][this.x];
                    if (xfriend.parent === null) {
                        xfriend.parent = this;
                        xfriend.value.style.backgroundColor = "lightblue";
                        celulo.push(xfriend);
                    };
                }
                else if (cellas[this.y+1][this.x] === endStatus){endStatus.parent = this; setFound();
endStatus.nvmcomebackforrest()}
            }
        };
        if (this.y - 1 >= 0) {
            if(cellas[this.y-1][this.x] !== startStatus && cellas[this.y-1][this.x].iswall === false /*Checks if next is start or wall*/){
                if(cellas[this.y-1][this.x] !== endStatus){
                    const xfriend = cellas[this.y-1][this.x];
                    if (xfriend.parent === null) {
                        xfriend.parent = this;
                        xfriend.value.style.backgroundColor = "lightblue";
                        celulo.push(xfriend);
                    }
                }
                else if (cellas[this.y-1][this.x] === endStatus){endStatus.parent = this;
setFound();endStatus.nvmcomebackforrest()}
            }
        };
    }
    nvmcomebackforrest(){
        if(this !== startStatus){this.value.style.backgroundColor = "blue";
        this.parent.nvmcomebackforrest();}
    }
    /*eventi() {
    this.value.onclick = () => {
        this.iswall = true;
        this.value.style.backgroundColor = "blue";
        };
    };*/
};

divy.id = "Diva";
divy.appendChild(grid);
starti.addEventListener("click", () => {modo = "start"});
endi.addEventListener("click", () => {modo = "end"});
walli.addEventListener("click", () => {modo = "wall"});
/* while(startStatus == "on"){
    for(const x of cellas) {x.addEventListener("click", x.iswall = "no"), console.log(1)};
}*/
document.body.appendChild(divy);
// while(startStatus == "on"){
//     for(let i = 0; x < cellas.length; i++) {cellas[i].value.addEventListener("click", function(){console.log("Hey")})};
// }
// fix the event listener br
