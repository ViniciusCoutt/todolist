let sendTask = document.querySelector("#sendTask")
let i = 1;

sendTask.addEventListener("click", send)

function send() {
    let task = document.querySelector("#txtInput")

    if(task.value == "") {
        alert("Campo vazio. Informe a tarefa")
    } else {
        createList(task.value)
    }
}

function createList(task) {
    let taskList = " "
    taskList += "<li>"
    taskList += `<label for=checkbox${i}> <input type='checkbox' id=checkbox${i}> ` + task + `</label>`
    taskList += ` <span onclick="remove(event)"><i class="fas fa-trash-alt"></i></span>`
    taskList += "</li>"

    document.getElementById('taskList').innerHTML += taskList
    i++
}

remove = function (event) {
    toRemove = event.currentTarget.parentElement

    toRemove.remove()

}



