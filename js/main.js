// modal window

let modal = document.getElementById("myModal");
let btn = document.getElementById("enter");
let clos = document.getElementById("close");
let openCab = document.getElementById("autorized");
let btnCl = document.getElementById("notAutorized");
let exitInLk = document.getElementById("exit");

const modalOn = () => {
    modal.style.display = "block";

};
const modalOff = () => {
    modal.style.display = "none";
    openCab.style.display = "block";
    btnCl.style.display = "none";
}
const exitIn = () => {
    openCab.style.display = "none";
    btnCl.style.display = "block";
}
exitInLk.onclick = exitIn;
btn.onclick = modalOn;
clos.onclick = modalOff;

// localstorage


// tabs
