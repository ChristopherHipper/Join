function getSidebarTemplate() {
    return `<div class="navigation">
            <img class="logo nav_logo" src="./assets/img/logo.png" alt="">
            <nav>
                <a id="summary_link" class="passiv_link" href="./summary.html">Summary</a>
                <a id="addTask_link" class="passiv_link" href="./addTask.html">Add Task</a>
                <a id="board_link" class="passiv_link" href="./board.html">Board</a>
                <a id="contact_link" class="passiv_link" href="">Contact</a>
            </nav>

            <div class="footer_content nav_footer">
                <a href="">Privacy Policy</a>
                <a href="">Legal notice</a>
            </div>
            </div>`
}

function renderSidebar() {
    const sidebarRef = document.getElementById('sidebar')
    sidebarRef.innerHTML = getSidebarTemplate()
}