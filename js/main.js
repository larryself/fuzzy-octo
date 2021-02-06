// modal window
const loginFormModal = document.querySelector(".js-form-modal");
const openFormLogin = document.querySelector(".js-open-form");
const logginBtn = document.querySelector(".js-autorized-user");
const authorizedUserControl = document.querySelector(".js-autorized-user-control");
const btnLogin = document.querySelector(".js-notautorized-user-control");
const btnExit = document.querySelector(".js-logout");
const modalWindow = document.querySelector('.js-bg-modal');

function loginFormOn(evt) {
    evt.preventDefault();
    loginFormModal.classList.add('active');
}

function loginFormOff(evt) {
    evt.preventDefault();
    loginFormModal.classList.remove('active');
    authorizedUserControl.classList.add('active');
    btnLogin.classList.add('not-active');
}

function exitInLK(evt) {
    evt.preventDefault();
    btnLogin.classList.remove('not-active');
    authorizedUserControl.classList.remove('active');
    btnLogin.classList.add('active');
}

btnExit.addEventListener("click", exitInLK);
openFormLogin.addEventListener("click", loginFormOn);
logginBtn.addEventListener("click", loginFormOff);
modalWindow.addEventListener("click", ((closeModalForm) => loginFormModal.classList.remove('active')));

//  login
const inputLogin = document.querySelector('.form-input-login');
const inpitPassword = document.querySelector('.form-input-password');
const userNameBox = document.querySelector('.js-user-name').value;



const inputLoginValue = document.querySelector('.form-input-login').value;
const passwordLoginValue = document.querySelector('.form-input-password').value;


//localstorage
const login = document.getElementsByClassName("form-input-login");
const clickCheck = document.getElementsByClassName("custom-checkbox")[0];
const truefalse = () => {
    if (document.getElementsByClassName("custom-checkbox")[0].checked) {
        localStorage.setItem("user", inputLoginValue);
    }
}
clickCheck.addEventListener("click", truefalse);


// tabs
const tabs = document.querySelectorAll('.nav-item');
const content = document.querySelectorAll('.content');
for (let i = 0; i < tabs.length; i++) {
    (function (i) {
        let tab = tabs[i];
        tab.addEventListener("click", function () {
            for (let j = 0; j < content.length; j++) {
                let display = window.getComputedStyle(content[j]).display;
                if (display === "block") {
                    content[j].style.display = "none";
                    tabs[j].classList.remove('nav-item-activ');

                }
            }
            content[i].style.display = "block";
            tabs[i].classList.add('nav-item-activ')
        })
    })(i);
}
