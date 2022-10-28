const clock = document.querySelector('h2#clock')

const getClock = () => {
    const date = new Date()
    // const second = date.getSeconds().toLocaleString('en', {minimumIntegerDigits: 2}) // 내가 알던 코드 ^^
    const hour = String(date.getHours()).padStart(2, "0")
    const minute = String(date.getMinutes()).padStart(2, "0")
    clock.innerText = `${hour}:${minute}`
}

const ONE_MINUTE = 60 * 1000

getClock()
setInterval(getClock, ONE_MINUTE)