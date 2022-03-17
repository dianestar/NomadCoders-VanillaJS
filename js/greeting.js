const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingDiv = document.querySelector("#greeting-div");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function paintGreeting(userName) {
    greeting.innerText = `Hello ${userName}`;
    greetingDiv.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    // 새로고침 방지
    event.preventDefault();

    // loginForm 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    // userName 저장
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);

    // greeting 보이기
    paintGreeting(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    // loginForm 보이기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    // greeting 보이기
    paintGreeting(savedUserName);
}

function onLogoutClick() {
    const yesOrNo = confirm(`Do you really want to LOG OUT?\n🚨 Things You Will Lose: Name Info, To Do List`);
    if (yesOrNo) {
        greetingDiv.classList.add(HIDDEN_CLASSNAME); 

        loginInput.value = "";
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        localStorage.removeItem(USERNAME_KEY);

        localStorage.removeItem(TODOS_KEY);

        window.location.reload();
    }
}

logoutBtn.addEventListener("click", onLogoutClick);