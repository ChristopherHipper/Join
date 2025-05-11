let date = "";
let category = "";
let priority = "medium";
let subtask = [];

function initTask() {
    getFromLocalStorage()
    highlightLink()
}

function highlightLink() {
    document.getElementById('addTask_link').classList.add('aktive_link')
}

function addSubtask() {
    let subtaskRef = document.getElementById('subtask_input')
    subtask.push(subtaskRef.value)
    subtaskRef.value = ""
    renderSubtasks()
};

function renderSubtasks() {
    let subtaskContent = document.getElementById('subtask')
    subtaskContent.innerHTML = "";
    for (let index = 0; index < subtask.length; index++) {
        subtaskContent.innerHTML += `<li><div class="single_subtask">${subtask[index]}<span class="delet_subtask" onclick="deleteSubtask('${subtask[index]}')">X</span></div></li>`
    }
}

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

function selectedDate() {
    date = document.getElementById("date").value;
    console.log(date);

}

function deleteSubtask(content) {
    const contentIndex = subtask.indexOf(content)
    subtask.splice(contentIndex, 1)
    renderSubtasks()
}

async function addTask() {
    let title = document.getElementById('title')
    let description = document.getElementById('description')
    let response = await fetch(BASE_URL + "/task" + ".json", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                "title": title.value,
                "description": description.value,
                "date": date,
                "category": category,
                "priority": priority,
                "subtask": subtask,
            })
    });
    return response.json()
}