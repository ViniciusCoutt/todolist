const addBtn = document.querySelector("#addTask")
const listBox = document.querySelector("#taskList")
const taskInput = document.querySelector("#txtInput")
const dateBox = document.querySelector(".date");

showList()

addBtn.addEventListener('click', getInput)
taskInput.onkeypress = function (e) {
    e.key == 'Enter' ? getInput() : null
}

function getInput() {
    taskInput.value == "" ? alert("Campo vazio. Informe a tarefa") : userTask = taskInput.value

    const localStorageData = localStorage.getItem("New task")
    localStorageData == null ? taskArr = [] : taskArr = JSON.parse(localStorageData)
    taskArr.push(userTask)
    localStorage.setItem("New task", JSON.stringify(taskArr))

    showList()
}

function showList() {
    const localStorageData = localStorage.getItem("New task")
    localStorageData == null ? taskArr = [] : taskArr = JSON.parse(localStorageData);

    const remainingTasks = document.querySelector(".remainingTasks")
    remainingTasks.textContent = taskArr.length + " tarefas";


    let newLi = "";
    taskArr.forEach((task, index) => {
        newLi +=
            `<li> 
                <label for=checkbox${index}> <input type='checkbox' id=checkbox${index}> ${task} </label> 
                <span onclick="removeTask(${index})">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>`
    })

    listBox.innerHTML = newLi
    taskInput.value = ""

}

function removeTask(index) {
    const localStorageData = localStorage.getItem("New task")
    taskArr = JSON.parse(localStorageData)
    taskArr.splice(index, 1)
    localStorage.setItem("New task", JSON.stringify(taskArr))

    showList()
}

// Input effect
taskInput.onkeyup = () => {
    console.log(taskInput.value.trim())
    if (taskInput.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
}

(function date() {
    let day;
    let dayN = new Date().getDay()
    switch (dayN) {
        case 0:
            day = ('Domingo')
            break
        case 1:
            day = ('Segunda')
            break
        case 2:
            day = ('Terça')
            break
        case 3:
            day = ('Quarta')
            break
        case 4:
            day = ('Quinta')
            break
        case 5:
            day = ('Sexta')
            break
        case 6:
            day = ('Sábado')
    }
    dateBox.innerHTML = `${day}, 0` + new Date().getDate()
})()
