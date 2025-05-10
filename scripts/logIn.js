function logIn() {
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    currentUser = users.find((user) => user.mail == email.value && user.password == pw.value)
    if (currentUser) {
        window.location.href = "summary.html";
        safeToLocalStorage()
    } else {
        let warningRef = document.getElementById('warning')
        warningRef.classList.remove('d_none')
        email.value = "";
        pw.value = "";
    }

}

function guestLogIn() {
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    email.value = "guest@mail.de"
    pw.value = "123"
}

function safeToLocalStorage() {
    localStorage.setItem("user", JSON.stringify(currentUser.name));
}

function init() {
    const timeout = setTimeout(closeLoader, 2500);
}

function closeLoader() {
    document.getElementById('loader').classList.add('d_none')
}

function ableBtn() {
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    let btn = document.getElementById('log_in')
    if (email.value.length > 0 && pw.value.length > 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }

}
