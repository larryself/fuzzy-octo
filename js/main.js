/// modal window

let modal = document.getElementById("myModal");
let btn = document.getElementById("open");
let clos = document.getElementById("close");
let openCab
const modalOn = () => {
    modal.style.display = "block";
};
const modalOff = () => {
    modal.style.display = "none";
}
btn.onclick = modalOn;
clos.onclick = modalOff;

/// localstorage