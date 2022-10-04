// search element among login-form (directly)
const loginForm = document.querySelector('#login-form') // form 으로 직접 변경
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden" // variable with only string(s)
const USERNAME_KEY = "userName" // variable for repeating values

const onLoginSubmit = e => { // submit event
    e.preventDefault()
    loginForm.classList.add('hidden') // hide input (userName exists)

    const userName = loginInput.value
    localStorage.setItem(USERNAME_KEY, userName) // temp storage on DOM
    showGreetings(userName)
}

// remove hidden attr from greeting and show texts
const showGreetings = userName => {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${userName}`
}

const localUserName = localStorage.getItem(USERNAME_KEY)

if (localUserName === null) { // no name -> show form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else { // name exists -> greeting hidden delete
    showGreetings(localUserName)
}