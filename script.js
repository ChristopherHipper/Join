const BASE_URL = "https://remotestorage-1f10b-default-rtdb.europe-west1.firebasedatabase.app/"

async function onloadFunc() {
    
    let userResponse = await getAllUsers("user")
    let userKeysArray = Object.values(userResponse)
    for (let index = 0; index < userKeysArray.length; index++) {
        users.push(
            {
                "mail" :  userKeysArray[index].mail,
                "password" : userKeysArray[index].password,
                "name" : userKeysArray[index].name
            }
        )   
    }
    
}

async function getAllUsers(path = "") {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json()
}

function showPassword() {
    let password = document.getElementById('password')
    if (password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}



function getFromLocalStorage() {
    let myUser = JSON.parse(localStorage.getItem("user"));
    if (myUser == null) {
      return;
    }else
    currentUser = myUser;
}

function logOut() {
    window.location.href = "index.html";
}

