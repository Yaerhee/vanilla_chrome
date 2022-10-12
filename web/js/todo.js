const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = "todos"
const toDos = []

const saveToDo = () => {
    // array 타입으로 값을 저장하기 위해 JSON.stringify 처리
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
    // JSON.stringify <=> JSON.parse 로 array <=> string
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
    saveToDo()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY) // string when console

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    parsedToDos.forEach(paintToDo) // newToDo 에 item 이 자동으로 들어가므로 언급할 필요 없음(!)
}