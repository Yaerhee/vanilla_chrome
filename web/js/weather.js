
const API_KEY = '2531eb55566289f25e33e857b7ba3356'
const apiAddress = 'https://api.openweathermap.org/data/2.5/weather?'

const onGeoOk = position => { // JavaScript 에 기본적으로 내장되어 있던 Callback 함수!
    // 인자만 제대로 전달해 주면 그대로 받아올 수 있음 :)
    // on success => gets GeolocationPosition Object
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const apiAddressWithVar = `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

    const localUserName = localStorage.getItem('userName')

    if (localUserName) {
        fetch(apiAddress + apiAddressWithVar)
            .then(res => res.json())
            .then(data => {
                const weatherIcon = data['weather'][0]['icon']
                const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`
                const weatherIconTag = document.querySelector('#weather-icon')
                weatherIconTag['src'] = weatherIconUrl
                document.querySelector('#weather').classList.remove(HIDDEN_CLASSNAME)

                const weatherText = data['weather'][0]['main']
                const weather = document.querySelector('#weather span:nth-child(2)')
                const city = document.querySelector('#weather span:nth-child(3)')
                console.log(data.name)
                city.innerText = data.name
                weather.innerText = `${data['main']['temp']}`

            })
    }
}

const onGeoErr = () => {
    alert("can't find your location...")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)