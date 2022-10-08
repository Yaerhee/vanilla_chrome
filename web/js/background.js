const images = [
    "wallpaper1.png",
    "wallpaper2.png",
    "wallpaper3.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]
const backgroundImage = document.createElement('img')
backgroundImage.src = `img/${chosenImage}`

document.body.appendChild(backgroundImage)