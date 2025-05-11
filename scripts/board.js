let currentId;
let tasks = [];

async function renderTasks() {
    getFromLocalStorage()
    await onloadTasks()
    getTasks()
    highlightLink()
}

function getTasks() {
    let renderToDoes = document.getElementById('to-do')
    renderToDoes.innerHTML = "";
    let renderInProgress = document.getElementById('in-progress')
    renderInProgress.innerHTML = "";
    let renderAwaitFeedback = document.getElementById('await')
    renderAwaitFeedback.innerHTML = "";
    let renderDone = document.getElementById('done')
    renderDone.innerHTML = "";
    for (let index = 0; index < tasks[0].length; index++) {
        switch (tasks[0][index].status) {
            case "toDo":
                renderToDoes.innerHTML += getTasksTemplate(index)
                break;
            case "inProgress":
                renderInProgress.innerHTML += getTasksTemplate(index)
                break;
            case "await":
                renderAwaitFeedback.innerHTML += getTasksTemplate(index)
                break;
            case "done":
                renderDone.innerHTML += getTasksTemplate(index)
                break;
            default:
                break;
        }

    }
}

function getTasksTemplate(index) {
    return `<div class="task_card" id="${tasks[0][index].id}" draggable="true" ondragstart="startDragging(${tasks[0][index].id}); highlight(${tasks[0][index].id})">
                ${tasks[0][index].title}
                ${tasks[0][index].description}
                ${tasks[0][index].category}
                ${tasks[0][index].date}
                ${tasks[0][index].priority}
                ${tasks[0][index].id}
            </div>`
}

function startDragging(id) {
    currentId = id;
}

function moveTo(status) {
    tasks[0][currentId].status = status
    console.log(tasks);
    getTasks()
}

function highlight(id) {
    document.getElementById(id).classList.add('highlight')
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

  function highlightLink() {
    document.getElementById('board_link').classList.add('aktive_link')
}

async function onloadTasks() {
    let userResponse = await getAllUsers("task")    
    let tasksKeysArray = Object.values(userResponse)
    tasks.push(tasksKeysArray)   
    console.log(tasks);
}

async function getAllUsers(path = "") {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json()
}