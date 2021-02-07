// Открытие модального окна авторизации
const loginFormModal = document.querySelector(".js-form-modal");
const openFormLoginBtn = document.querySelector(".js-open-form-btn-open");

function loginFormOn(evt) {
    evt.preventDefault();
    loginFormModal.classList.add("active");
}

openFormLoginBtn.addEventListener("click", loginFormOn);

// Закрытие модального окна при нажатии на оверлей
const closeLoginFormModal = () => loginFormModal.classList.remove("active");
const loginFormModalOverlay = document.querySelector(".js-bg-modal");
loginFormModalOverlay.addEventListener("click", () => closeLoginFormModal());


// Работа с localStorage
const authStateKey = "authState"
const saveAuthorizedStateToLocalStorage = (username) => {
    localStorage.setItem(
        authStateKey,
        JSON.stringify({
            authorized: true,
            username
        })
    );
};
const getAuthorizedState = () => {
    const auth = localStorage.getItem(authStateKey);
    if (!auth) {
        return {
            authorized: false
        };
    }
    const authParsed = JSON.parse(auth);
    if (authParsed.authorized) {
        return {
            authorized: true,
            username: authParsed.username
        };
    }
    return {
        authorized: false
    };
};
const clearAuthState = () => {
    localStorage.clear(authStateKey);
}

// Авторизация
const loginForm = document.querySelector(".js-login-form");
const authorizedUserBox = document.querySelector(".js-logout-btn-exit");
const anonymousUserBox = document.querySelector(
    ".js-open-form-btn-open"
);
const userNameBox = document.querySelector(".js-user-name");
const makeUiAuthorized = (username) => {

    userNameBox.textContent = username;
    authorizedUserBox.classList.add("active");
    anonymousUserBox.classList.remove("active");
    userNameBox.classList.add("active");   // <====
}
const authStatus = getAuthorizedState();
if (authStatus.authorized) {
    makeUiAuthorized(authStatus.username);
}

function authorize() {
    const inputLogin = document.querySelector(".form-input-login");
    const username = inputLogin.value
    saveAuthorizedStateToLocalStorage(username);
    makeUiAuthorized(username);
    closeLoginFormModal();
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    authorize();
    // очищаем форму
    loginForm.reset();
});

//Выход из авторизованного состояния
const btnExit = document.querySelector(".js-logout-btn-exit");

function exitInLK(evt) {
    evt.preventDefault();
    authorizedUserBox.classList.remove("active");
    anonymousUserBox.classList.add("active");
    userNameBox.classList.remove("active");
    clearAuthState();
}

btnExit.addEventListener("click", exitInLK);

// tabs
const tabs = document.querySelectorAll(".js-tab");
const tabContents = document.querySelectorAll(".js-content");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        if (tab.classList.contains("nav-item-active")) {
            return;
        }
        tabs.forEach((currentTab) => {
            if (currentTab === tab) {
                currentTab.classList.add("nav-item-active");
            } else {
                currentTab.classList.remove("nav-item-active");
            }
        });
        tab.classList.add("nav-item-active");
        const target = tab.dataset.tabTarget;
        tabContents.forEach((tabContent) => {
            const isTarget = tabContent.dataset.tabTarget === target;
            if (isTarget) {
                tabContent.classList.add("active");
            } else {
                tabContent.classList.remove("active");
            }
        });
    });
});

// Открытие инпута при нажатии на имя пользователя
// - при нажатии на имя пользователя показать инпут с таким же значением
// - при изменении инпута сохранять значение в спан
// - при изменении инпута сохранять значение в localStorage
// - при сабмите инпута на enter скрываем инпут и отображаем спан с именем пользователя

const inputChangeUserName = document.querySelector('.js-change-user-name-input')
const userNameSpan = document.querySelector('.js-user-name');
const fuckingForma = document.querySelector(".js-formaKissMyAss");

function exitNameChange() {
    inputChangeUserName.classList.remove("active");
    userNameSpan.classList.add("active");
}

function saveNameChange() {
    saveAuthorizedStateToLocalStorage(inputChangeUserName.value);
    userNameSpan.textContent = inputChangeUserName.value;
    inputChangeUserName.addEventListener("blur", exitNameChange);
    fuckingForma.addEventListener("submit", (evt) => {
        evt.preventDefault();
        exitNameChange();
    });
}

function changeUserName() {
    inputChangeUserName.value = userNameSpan.textContent;
    inputChangeUserName.classList.add("active");
    userNameSpan.classList.remove("active");
    inputChangeUserName.focus();
    inputChangeUserName.addEventListener("blur", exitNameChange);
    inputChangeUserName.addEventListener("change", saveNameChange);
}

userNameSpan.addEventListener("click", changeUserName);
