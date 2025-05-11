async function signUp() {
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    let confirmPw = document.getElementById('confirm_password');
    let name = document.getElementById('name');
    checkPassword(pw, confirmPw)
    let response = await fetch(BASE_URL + "/user" + ".json", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                "mail": email.value,
                "password": pw.value,
                "name": name.value
            })
    });
    succeedRegistration();
    const Timeout = setTimeout(fowarding, 2000);
    return response.json()
}

function succeedRegistration() {
    let succeed = document.getElementById('success_registration')
    succeed.classList.remove('d_none')
    document.getElementById('register_button').disabled = true;
}

function fowarding() {
    window.location.href = "index.html"
}

function showConfirmPassword() {
    let password = document.getElementById('confirm_password')
    if (password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}

function checkPassword(firstPw, secondPw) {
    try {
        if (firstPw.value === secondPw.value) {
            return
        }
    }
    catch (error) {
        let warningRef = document.getElementById('warning')
        warningRef.classList.remove('d_none')
    }
}