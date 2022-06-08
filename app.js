const gamedata = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

const players = [
    {
        name : '',
        symbol : 'X'
    },
    {
        name : '',
        symbol : 'O'
    }
]
let playerselected = 0;
let activeplayer = 0;
let currentround = 1;
let roundover = false

const layout = document.getElementById("layout");
const backdrop = document.getElementById("backdrop");
const edit1 = document.getElementById("edit1");
const edit2 = document.getElementById("edit2");
const cancel = document.getElementById("cancel");
const form = document.querySelector("form");
const inputerror = document.getElementById("error");
const startgame = document.getElementById("start-game");
const gamearea = document.getElementById("active-game");
const board = document.querySelectorAll("#board li");
const turn = document.getElementById("active-playername");
const gameresult = document.getElementById("game-over");

edit1.addEventListener("click", openlayout);
edit2.addEventListener("click", openlayout);
cancel.addEventListener("click", closelayout);
backdrop.addEventListener("click", closelayout);
form.addEventListener("submit", confirminfo);
startgame.addEventListener("click", startnewgame);
for (const block of board) {
    block.addEventListener("click", selectblock)
}