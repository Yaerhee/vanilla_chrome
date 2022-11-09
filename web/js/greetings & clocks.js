// search element among login-form (directly)
const loginForm = document.querySelector('#login-form') // form 으로 직접 변경
const loginTitle = document.querySelector('#login-title') // Hello, what's your name?
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

// 221107 - 로그인 처리 여부에 따른 시계 불러오기 기능을 위해 js 합침
const clock = document.querySelector('h2#clock')

const HIDDEN_CLASSNAME = "hidden" // variable with only string(s)
const USERNAME_KEY = "userName" // variable for repeating values

const getClock = () => {
    const date = new Date()
    // const second = date.getSeconds().toLocaleString('en', {minimumIntegerDigits: 2}) // 내가 알던 코드 ^^
    const hour = String(date.getHours()).padStart(2, "0")
    const minute = String(date.getMinutes()).padStart(2, "0")
    clock.innerText = `${hour}:${minute}`
}

const onLoginSubmit = e => { // submit event
    e.preventDefault()
    loginForm.classList.add('hidden') // hide input (userName exists)

    const userName = loginInput.value
    localStorage.setItem(USERNAME_KEY, userName) // temp storage on DOM
    showGreetings() // 이미 userName 이 저장되어 있으므로 변수로 담지 않아도 됨
    // but => localStorage.getItem x2 (취존... ^^)
}

// remove hidden attr from greeting and show texts
const showGreetings = () => {
    const userName = localStorage.getItem(USERNAME_KEY)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Good Day, ${userName}.`
    getClock()
}

const localUserName = localStorage.getItem(USERNAME_KEY)

if (localUserName === null) { // no name -> show form
    clock.className = 'hidden'
    clock.innerText = ""
    loginTitle.classList.remove(HIDDEN_CLASSNAME)
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else { // name exists -> greeting hidden delete
    clock.classList.remove(HIDDEN_CLASSNAME)
    showGreetings()

    const ONE_MINUTE = 60 * 1000
    setInterval(getClock, ONE_MINUTE)
}



