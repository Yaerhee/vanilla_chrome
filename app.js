// search element among login-form (directly)
const loginForm = document.querySelector('#login-form') // form 으로 직접 변경
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden" // variable with only string(s)

const onLoginSubmit = e => { // submit event
    e.preventDefault()
    loginForm.classList.add('hidden') // hide input (userName exists)

    const userName = loginInput.value
    localStorage.setItem('userName', userName) // temp storage on DOM
    greeting.innerText = `Hello ${userName}` // = "Hello" + userName
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener('submit', onLoginSubmit)