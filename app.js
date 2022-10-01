// search element among login-form (directly)
const loginForm = document.querySelector('#login-form') // form 으로 직접 변경
const loginInput = document.querySelector('#login-form input')

const onLoginSubmit = e => {
    e.preventDefault()
    console.log("hello", loginInput.value)
}

loginForm.addEventListener('submit', onLoginSubmit)