"use strict";

// Открытие модального окна авторизации
var loginFormModal = document.querySelector(".js-form-modal");
var openFormLoginBtn = document.querySelector(".js-open-form-btn-open");

function loginFormOn(evt) {
    evt.preventDefault();
    loginFormModal.classList.add("active");
}

openFormLoginBtn.addEventListener("click", loginFormOn); // Закрытие модального окна при нажатии на оверлей

var closeLoginFormModal = function closeLoginFormModal() {
    return loginFormModal.classList.remove("active");
};

var loginFormModalOverlay = document.querySelector(".js-bg-modal");
loginFormModalOverlay.addEventListener("click", function () {
    return closeLoginFormModal();
});
// Работа с localStorage

var authStateKey = "authState";

var saveAuthorizedStateToLocalStorage = function saveAuthorizedStateToLocalStorage(username) {
    localStorage.setItem(authStateKey, JSON.stringify({
        authorized: true,
        username: username
    }));
};

var getAuthorizedState = function getAuthorizedState() {
    var auth = localStorage.getItem(authStateKey);

    if (!auth) {
        return {
            authorized: false
        };
    }

    var authParsed = JSON.parse(auth);

    if (authParsed.authorized) {
        if (authParsed.username.length > 0) {
            return {
                authorized: true,
                username: authParsed.username
            };
        }
        return {
            authorized: false
        };
    }

    return {
        authorized: false
    };
};

var clearAuthState = function clearAuthState() {
    localStorage.clear(authStateKey);
};
// Авторизация

var loginForm = document.querySelector(".js-login-form");
var authorizedUserBox = document.querySelector(".js-logout-btn-exit");
var anonymousUserBox = document.querySelector(".js-open-form-btn-open");
var userNameBox = document.querySelector(".js-user-name");

var makeUiAuthorized = function makeUiAuthorized(username) {
    userNameBox.textContent = username;
    authorizedUserBox.classList.add("active");
    anonymousUserBox.classList.remove("active");
    userNameBox.classList.add("active"); // <====
};

var authStatus = getAuthorizedState();

if (authStatus.authorized) {
    makeUiAuthorized(authStatus.username);
}

function authorize() {
    var inputLogin = document.querySelector(".form-input-login");
    var username = inputLogin.value;
    if (checkbox.checked) {
        saveAuthorizedStateToLocalStorage(username);
    }
    makeUiAuthorized(username);
    closeLoginFormModal();
}

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    authorize(); // очищаем форму
    loginForm.reset();
});
//Выход из авторизованного состояния

var btnExit = document.querySelector(".js-logout-btn-exit");

function exitInLK(evt) {
    evt.preventDefault();
    authorizedUserBox.classList.remove("active");
    anonymousUserBox.classList.add("active");
    userNameBox.classList.remove("active");
    clearAuthState();
}

btnExit.addEventListener("click", exitInLK); // tabs

var tabs = document.querySelectorAll(".js-tab");
var tabContents = document.querySelectorAll(".js-content");
tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        if (tab.classList.contains("nav-item-active")) {
            return;
        }

        tabs.forEach(function (currentTab) {
            if (currentTab === tab) {
                currentTab.classList.add("nav-item-active");
            } else {
                currentTab.classList.remove("nav-item-active");
            }
        });
        tab.classList.add("nav-item-active");
        var target = tab.dataset.tabTarget;
        tabContents.forEach(function (tabContent) {
            var isTarget = tabContent.dataset.tabTarget === target;

            if (isTarget) {
                tabContent.classList.add("active");
            } else {
                tabContent.classList.remove("active");
            }
        });
    });
});

var inputChangeUserName = document.querySelector('.js-change-user-name-input');
var userNameSpan = document.querySelector('.js-user-name');
var formChangeUserName = document.querySelector(".js-form-user-name-change");

function exitNameChange() {
    inputChangeUserName.classList.remove("active");
    userNameSpan.classList.add("active");
}

function saveNameChange() {
    saveAuthorizedStateToLocalStorage(inputChangeUserName.value);
    userNameSpan.textContent = inputChangeUserName.value;
}

formChangeUserName.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (inputChangeUserName.value.length !== 0) {
        inputChangeUserName.classList.remove("bad-name")
        exitNameChange()
    }
    inputChangeUserName.classList.add("bad-name");
    inputChangeUserName.focus();

});

inputChangeUserName.addEventListener("blur", () => {
    if (inputChangeUserName.value.length !== 0) {
        inputChangeUserName.classList.remove("bad-name")
        exitNameChange()
    }
    inputChangeUserName.classList.add("bad-name");
    inputChangeUserName.focus();
});
inputChangeUserName.addEventListener("change", saveNameChange);

function changeUserName() {
    inputChangeUserName.value = userNameSpan.textContent;
    inputChangeUserName.classList.add("active");
    userNameSpan.classList.remove("active");
    inputChangeUserName.focus();
}

userNameSpan.addEventListener("click", changeUserName);