async function signUp() {
    let warningRef = document.getElementById('warning')
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    let confirmPw = document.getElementById('confirm_password');
    let name = document.getElementById('name');
    warningRef.classList.add('d_none')
    try {
        await checkPassword(pw, confirmPw)
        console.log("gleiches pw");
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
    } catch (error) {
        warningRef.classList.remove('d_none')
        console.log("gleiches pw");
    }

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
    return new Promise((resolve, reject) => {
        if (firstPw.value === secondPw.value) {
            resolve("gleiches pw")
        } else {
            reject("ungleiches pw")
        }
    })
}