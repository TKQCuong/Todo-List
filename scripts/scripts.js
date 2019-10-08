function getAppState() {
    return JSON.parse(localStorage.getItem("taskSaving")) || [
    ]
}
function save(taskSaving) {
    return localStorage.setItem('taskSaving', JSON.stringify(taskSaving));
}

let Todolist = getAppState();
function addTodo() {
    const item = {
        text: document.getElementById('taskInput').value,
        status: new Date(),
        isDone: false
    }
    Todolist.push(item)
    //update UI
    updateTodoList();
    save(Todolist)
}
console.log(Todolist)

function updateTodoList(status) {
    let todos
    if (status == 'done') {
    todos = Todolist.filter(todo => todo.isDone )
    save(Todolist)
  
    } else if (status == 'undone') {
    todos = Todolist.filter(todo => !todo.isDone )

    } else {
    todos = Todolist
    }
    const taskTaking = todos.map((item,i) =>{
        return `
        <li class="${item.isDone ? 'done':'undone'}">
        ${item.text}
        <a href="#" onclick="remove(${i})">X</a>
        <a href="#" onclick="toggleDone(${i})">Toggle</a>
        </li>`
    })
    document.getElementById("result").innerHTML = taskTaking.join('')
};

function remove(index) {
    Todolist.splice(index,1)
    updateTodoList()
}

function toggleDone(index) {
    Todolist[index].isDone = !Todolist[index].isDone
    updateTodoList()
}

updateTodoList(Todolist)

