function initTask() {
    getFromLocalStorage()
    highlightLink()
}

function highlightLink() {
    document.getElementById('addTask_link').classList.add('aktive_link')
}

function addSubtask(){
    let subtaskRef = document.getElementById('subtask_input')
    let subtaskContent = document.getElementById('subtask')
    subtaskContent.innerHTML += `- ` + subtaskRef.value + `<br>`
    subtaskRef.value = ""
};