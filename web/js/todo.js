const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = "todos"
let toDos = []
// page reset -> array reset ? 이 아니라 localStorage 에 있던 값이 그대로 다시 나오도록 하기

const saveToDo = () => {
    // array 타입으로 값을 저장하기 위해 JSON.stringify 처리
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
    // JSON.stringify <=> JSON.parse 로 array <=> string
}

const deleteToDo = e => {
    const li = e.target.parentElement
    li.remove() // delete clicked li
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) // exclude clicked id
    // toDos 를 filter 한 Object 로 갱신한 후, localStorage 에 다시 setItem
    saveToDo()
}

const paintToDo = newToDoObj => {
    const li = document.createElement('li')
    li.id = newToDoObj.id
    const span = document.createElement('span')
    span.innerText = newToDoObj.text

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
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }

    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDo()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY) // string when console

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos // 여기 중요!!!
    // localStorage data 가 있을 경우, 페이지를 새로 고침 하더라도 toDos 에 array 를 넣어줌
    parsedToDos.forEach(paintToDo) // newToDo 에 item 이 자동으로 들어가므로 언급할 필요 없음(!)
    // cf: 배열이 7개가 넘어갈 경우? array 가 빈다 => 배열 개수가 아니라 새로고침 할때마다 array reset
}