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
const login = document.getElementsByClassName("form-input_login");
const clickCheck = document.getElementsByClassName("custom-checkbox");
const truefalse = () => {
    if (document.getElementsByClassName("custom-checkbox")[0].checked) {
        alert(login)
    }
}
clickCheck.onclick = truefalse;

// tabs

console.log(document.querySelectorAll('.main-nav .nav-item'))
document.querySelectorAll('.main-nav .nav-item').forEach((item, index) => {
    const element = document.getElementById(`movi`);
    item.addEventListener('click', () => item.classList.add('nav-item_activ'));
    item.addEventListener('!click', () => item.classList.toggle('nav-item_activ'));
});