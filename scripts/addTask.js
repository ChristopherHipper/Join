let title = document.getElementById('title')
let description = document.getElementById('description')
let date = document.getElementById('date')
let category = ""
let priority = "medium";

function initTask() {
    getFromLocalStorage()
    highlightLink()
}

function highlightLink() {
    document.getElementById('addTask_link').classList.add('aktive_link')
}

function addSubtask() {
    let subtaskRef = document.getElementById('subtask_input')
    let subtaskContent = document.getElementById('subtask')
    subtaskContent.innerHTML += `- ` + subtaskRef.value + `<br>`
    subtaskRef.value = ""
};

function selectedPrio(prio) {
    priority = "";
    switch (prio) {
        case "urgent":
            return priority = "urgent"
        case "medium":
            return priority = "medium"
        case "low":
            return priority = "low"
        default:
            break;
    }
}

function selectedCategory() {
    let selectCategory = document.getElementById('category')
    category = selectCategory.options[selectCategory.selectedIndex].text
}