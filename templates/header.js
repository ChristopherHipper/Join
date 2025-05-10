function getHeaderTemplate() {
    return `        <div class="kanban_header">
            <h3>Kanban Project Management Tool</h3>
            <div onclick="logOut()" id="user_button" class="user_button"></div>
        </div>`
}

function renderHeader() {
    const headerRef = document.getElementById('header')
    headerRef.innerHTML = getHeaderTemplate()
    greetingName();
}

function greetingName() {
    let greetingNameLetter = document.getElementById('user_button')
    greetingNameLetter.innerHTML = `${currentUser.charAt(0)}`
}