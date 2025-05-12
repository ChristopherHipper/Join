async function init() {
    getFromLocalStorage()
    await onloadTasks()
    let allTasks = document.getElementById('tasks_in_board')
    allTasks.innerHTML = "Tasks in Board:" + " " + tasks[0].length
    let toDoes = document.getElementById('current_to_does')
    currentToDoes = tasks[0].filter((i) => i.status == "toDo")
    toDoes.innerHTML = "To-Do:" + " " + currentToDoes.length
    let done = document.getElementById('done')
    currentDone = tasks[0].filter((i) => i.status == "done")
    done.innerHTML = "Done:" + " " + currentDone.length
    let inProgress = document.getElementById('tasks_in_progress')
    currentInProgress = tasks[0].filter((i) => i.status == "inProgress")
    inProgress.innerHTML = "Tasks in Progress:" + " " + currentInProgress.length
    let awaitFeedback = document.getElementById('awaiting_feedback')
    currentAwait = tasks[0].filter((i) => i.status == "await")
    awaitFeedback.innerHTML = "Awaiting Feedback:" + " " + currentAwait.length
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

