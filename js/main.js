// modal window

let modal = document.getElementById("myModal");
let btn = document.getElementById("enter");
let clos = document.getElementById("close");
let openCab = document.getElementById("autorized");
let btnCl = document.getElementById("notAutorized");
let btnExit = document.getElementById("exit");

const modalOn = () => {
    modal.style.display = "block";

};
const modalOff = () => {
    modal.style.display = "none";
    openCab.style.display = "block";
    btnCl.style.display = "none";
}
const exitInLK = () => {
    openCab.style.display = "none";
    btnCl.style.display = "block";
}
btnExit.addEventListener("click", exitInLK);
btn.addEventListener("click", modalOn);
clos.addEventListener("click", modalOff);

