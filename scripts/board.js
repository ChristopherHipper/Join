let currentId;

function renderTasks() {
    getFromLocalStorage()
    let renderToDoes = document.getElementById('to-do')
    renderToDoes.innerHTML = "";
    let renderInProgress = document.getElementById('in-progress')
    renderInProgress.innerHTML = "";
    let renderAwaitFeedback = document.getElementById('await')
    renderAwaitFeedback.innerHTML = "";
    let renderDone = document.getElementById('done')
    renderDone.innerHTML = "";
    for (let index = 0; index < tasks.length; index++) {
        switch (tasks[index].category) {
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
    highlightLink()
}

function getTasksTemplate(index) {
    return `<div id="${tasks[index].id}" draggable="true" ondragstart="startDragging(${tasks[index].id}); highlight(${tasks[index].id})">
                ${tasks[index].name}
                ${tasks[index].description}
            </div>`
}

function startDragging(id) {
    currentId = id;
}

function moveTo(category) {
    tasks[currentId].category = category
    renderTasks();
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