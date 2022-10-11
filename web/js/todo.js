const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')

const toDos = []

const saveToDo = toDos => {
    localStorage.setItem("todos", toDos)
}

const deleteToDo = e => {
    const targetLi = e.target.parentElement
    targetLi.remove()
}

const paintToDo = newToDo => {
    const li = document.createElement('li')

    const span = document.createElement('span')
    span.innerText = newToDo

    const btn = document.createElement('button')
    btn.innerText = '❌'
    btn.addEventListener('click', deleteToDo)

    li.appendChild(span)
    li.appendChild(btn)

    toDoList.appendChild(li)
}

const handleToDoSubmit = e => {
    e.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ''
    toDos.push(newToDo)
    paintToDo(newToDo)
}

toDoForm.addEventListener('submit', handleToDoSubmit)