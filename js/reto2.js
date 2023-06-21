let btnClick = document.getElementById("btnClick")
let selectChange = document.getElementById("selectChange")
let img = document.getElementById("img")
let inputKey = document.getElementById("inputKey")
let press = document.getElementById("press")
let dbClick = document.getElementById("dbClick")
let img2 = document.getElementById("img2")
let rgBtn = document.getElementById("rgBtn")
let focusText = document.getElementById("focusText")

//CLICK
btnClick.addEventListener("click",(e)=>{
    e.preventDefault()
    alert("He sido clickeado")
})

//CHANGE
selectChange.addEventListener("change",()=>{
    alert("Valor cambiado "+ selectChange.value)
})

//MOUSEOVER
img.addEventListener("mouseover",()=>{
    alert("has pasado encima de la imagen")
})

//KEYDOWN
inputKey.addEventListener("keydown",()=>{
    alert("has presionado una tecla" )
})

//KEYPRESS
press.addEventListener("keyup",()=>{
    alert("Has dejado de presionar la tecla")
})

//mousedown
dbClick.addEventListener("dblclick",()=>{
    alert("Me has clickeado 2 veces")
})

//mouseout
img2.addEventListener("mouseout",()=>{
    alert("Has salido de la imagen")
})

//CONTEXTMENU
rgBtn.addEventListener("contextmenu",()=>{
    alert("He sido clieckeado con el botón derecho")
})

//FOCUS
focusText.addEventListener("focus",()=>{
    focusText.style.color = "blue"
})

//BLUR
focusText.addEventListener("blur",()=>{
    focusText.style.color = "black"
})