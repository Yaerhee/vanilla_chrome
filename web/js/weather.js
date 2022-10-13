
const API_KEY = '2531eb55566289f25e33e857b7ba3356'
const apiAddress = 'https://api.openweathermap.org/data/2.5/weather?'


const onGeoOk = position => { // JavaScript 에 기본적으로 내장되어 있던 Callback 함수!
    // 인자만 제대로 전달해 주면 그대로 받아올 수 있음 :)
    // on success => gets GeolocationPosition Object
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const apiAddressWithVar = `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

    fetch(apiAddress + apiAddressWithVar)
        .then(res => res.json())
        .then(data => {
            const weather = document.querySelector('#weather span:first-child')
            const city = document.querySelector('#weather span:last-child')
            city.innerText = data.name
            weather.innerText = `${data['weather'][0]['main']} / ${data['main']['temp']}`
        })
}

const onGeoErr = () => {
    alert("can't find your location...")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)