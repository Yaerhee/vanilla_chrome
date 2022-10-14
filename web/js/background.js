const images = [
    "wallpaper1.png",
    "wallpaper2.png",
    "wallpaper3.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]
const backgroundDiv = document.querySelector('.background')
const imgTag = document.createElement('img')
const backgroundImage = backgroundDiv.appendChild(imgTag)
backgroundImage.src = `img/${chosenImage}`

// document.body.appendChild(backgroundImage)