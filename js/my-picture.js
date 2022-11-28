const imageDiv = document.getElementById("my-picture")
const myPicture = document.createElement('img')
myPicture.src = "img/me.png"
myPicture.style.borderRadius = "1000px"
myPicture.style.maxWidth = "150px"
myPicture.style.width = "100%"
myPicture.style.opacity = "0"
myPicture.style.transition = "0.5s"
myPicture.style.filter = "invert(100%)"

myPicture.onload = () => {
  myPicture.style.opacity = "1"
  myPicture.style.filter = "invert(0%)"
}

imageDiv.appendChild(myPicture)
