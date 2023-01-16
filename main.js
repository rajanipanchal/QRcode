const form = document.querySelector("form")
const input = document.querySelector("input")
const image = document.querySelector(".image img")

async function getQr(e){
e.preventDefault()

const response = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=50x150&data=' + input.value)
const qrImage = response.url
image.setAttribute("src" , qrImage)
form.reset()
}

form.addEventListener("submit" , getQr)