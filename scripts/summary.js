function init() {
    getFromLocalStorage()
    let allTasks = document.getElementById('tasks_in_board')
    allTasks.innerHTML = "Tasks in Board:" + " " + tasks.length
    let toDoes = document.getElementById('current_to_does')
    currentToDoes = tasks.filter((i) => i.category == "toDo")
    toDoes.innerHTML = "To-Do:" + " " + currentToDoes.length
    let done = document.getElementById('done')
    currentDone = tasks.filter((i) => i.category == "done")
    done.innerHTML = "Done:" + " " + currentDone.length
    let inProgress = document.getElementById('tasks_in_progress')
    currentInProgress = tasks.filter((i) => i.category == "inProgress")
    inProgress.innerHTML = "Tasks in Progress:" + " " + currentInProgress.length
    let await = document.getElementById('awaiting_feedback')
    currentAwait = tasks.filter((i) => i.category == "await")
    await.innerHTML = "Awaiting Feedback:" + " " + currentAwait.length
    greeting();
    highlightLink()
}

function greeting() {
    let greetingName = document.getElementById('name')
    let greetContainer = document.getElementById('greeting')
    greetingName.innerHTML = `<h2 class="user_headline">${currentUser}</h2>`
    let timeNow = new Date().getHours();
    if (timeNow>=5 && timeNow<=12) {
         greetContainer.innerHTML = "<h2>Good Morning,</h2>"
    } else if (timeNow>=12 && timeNow<=18) {
        greetContainer.innerHTML = "<h2>Good Afternoon,</h2>"
    }else{
        greetContainer.innerHTML = "<h2>Good Evening,</h2>"
    }
}

function highlightLink() {
    document.getElementById('summary_link').classList.add('aktive_link')
}

