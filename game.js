function resetgame() {
    activeplayer = 0;
    currentround = 1;
    roundover = false;
    gameresult.firstElementChild.innerHTML = "You won <span id=\"winner-name\">Playername</span>!!!";
    gameresult.style.display = 'none';
    let index = 0;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            gamedata[i][j] = 0;
            board[index].textContent = '';
            board[index].classList.remove("disabled");
            index++;
        }
    }
}

function startnewgame() {
    if (players[0].name === '' || players[1].name === '')
    {
        alert("enter players names!!!")
        return ;
     }
    resetgame();
    gamearea.style.display = "block";
}

function switcplayer() {
    if (activeplayer === 0) {
        activeplayer = 1;
    }
    else{
        activeplayer = 0;
    }
    turn.textContent = players[activeplayer].name;
}

function selectblock(event) {
    if (roundover) {
        return ;
    }
    const selectrow = event.target.dataset.row - 1;
    const selectcol = event.target.dataset.col - 1;
    if (gamedata[selectrow][selectcol] > 0)
    {
        alert("select an empty field");
        return ;
    }
    event.target.textContent = players[activeplayer].symbol;
    event.target.classList.add("disabled");
    gamedata[selectrow][selectcol] = activeplayer + 1;
    const winnerid = checkforwinner();
    if (winnerid) {
        endgame(winnerid);
    }
    currentround++;
    switcplayer();
}

function checkforwinner() {
    for (let i=0; i<3; i++)
    {
        if (gamedata[i][0] > 0 && gamedata[i][0] == gamedata[i][1] && gamedata[i][1] == gamedata[i][2]) {
            return gamedata[i][0];
        }
    }     
    for (let i=0; i<3; i++)
    {
        if (gamedata[0][i] > 0 && gamedata[0][i] == gamedata[1][i] && gamedata[1][i] == gamedata[2][i]) {
            return gamedata[0][i];
        }
    }
    if (gamedata[0][0] > 0 && gamedata[0][0] == gamedata[1][1] && gamedata[1][1] == gamedata[2][2]) {
        return gamedata[0][0];
    }
    if (gamedata[2][0] > 0 && gamedata[2][0] == gamedata[1][1] && gamedata[1][1] == gamedata[0][2]) {
            return gamedata[2][0];
    }
    if (currentround === 9) {
        return -1;
    }
    return 0;
}

function endgame (winnerid) {
    roundover = true;
    gameresult.style.display = "block";
    if (winnerid > 0){
        gameresult.firstElementChild.firstElementChild.textContent = players[winnerid - 1].name;
    }
    else {
       gameresult.firstElementChild.textContent = "it\'s a draw " 
    }
}