// modal window

const modal = document.getElementById("myModal");
const btn = document.getElementById("enter");
const btnEnter = document.getElementById("close");
const openCab = document.getElementById("autorized");
const btnCl = document.getElementById("notAutorized");
const btnExit = document.getElementById("exit");

function modalOn() {
    modal.style.display = "block";
}
function modalOff() {
    modal.style.display = "none";
    openCab.style.display = "block";
    btnCl.style.display = "none";
}
function exitInLK() {
    openCab.style.display = "none";
    btnCl.style.display = "block";
}

btnExit.addEventListener("click", exitInLK);
btn.addEventListener("click", modalOn);
btnEnter.addEventListener("click", modalOff);


//  login
const input = document.querySelector('.form-input_login');
const password = document.querySelector('.form-input_password');
const log = document.getElementById('aut-input');
input.addEventListener('input', updateValue);
function updateValue(e) {
    log.textContent = e.target.value;
}
const inputValue = document.querySelector('.form-input_login').value;
const passwordValue = document.querySelector('.form-input_password').value;







//localstorage
const login = document.getElementsByClassName("form-input_login");
const clickCheck = document.getElementsByClassName("custom-checkbox")[0];
const truefalse = () => {
    if (document.getElementsByClassName("custom-checkbox")[0].checked) {
        console.log(document.querySelector('.form-input_login').value)
    }
}
clickCheck.addEventListener( "click",truefalse);

// tabs
const tabs = document.querySelectorAll('.nav-item');
const content = document.querySelectorAll('.content');
for(let i=0; i < tabs.length; i++) {
    (function(i) {
        let tab = tabs[i];
        tab.addEventListener("click",   function() {
            for(let j=0; j < content.length; j++) {
                let display = window.getComputedStyle(content[j]).display;
                if(display === "block") {
                    content[j].style.display = "none";
                    tabs[j].classList.remove('nav-item_activ');

                }
            }
            content[i].style.display = "block";
            tabs[i].classList.add('nav-item_activ')
        })
    })(i);
}
