function openlayout(event) {
    playerselected = + event.target.dataset.playerid;
    layout.style.display = 'block';
    backdrop.style.display = 'block';
}
function closelayout() {
    layout.style.display = 'none';
    backdrop.style.display = 'none';
    form.children[0].classList.remove("error");
    inputerror.style.color = "black";
    inputerror.textContent = "";
    form.firstElementChild.lastElementChild.value = '';
}
function confirminfo(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const playername = formdata.get("Name").trim();
    if (!playername) {
        event.target.children[0].classList.add('error');
        inputerror.textContent = "Invalid name... Please try again";
        inputerror.style.color = "red";
        return ;
    }
    const playerdata = document.getElementById("player" + playerselected);
    playerdata.children[1].textContent = playername;
    players[playerselected - 1].name = playername;
    closelayout();
}