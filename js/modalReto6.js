//1.Acceder al boton para abrir el modal
let pModalBtnSq = document.getElementById("squareModalBtnP") 
let aModalBtnSq = document.getElementById("squareModalBtnA")
let pModalBtnReg = document.getElementById("rectangleModalBtnP")
let aModalBtnReg = document.getElementById("rectangleModalBtnA")
let pModalBtnTrg = document.getElementById("triangleModalBtnP")
let aModalBtnTrg = document.getElementById("triangleModalBtnA")

//2.Acceder a la ventana modal
let sqModalWindowP = document.getElementById("squareModalWindowP")
let sqModalWindowA = document.getElementById("sqAreaModalWindowA")
let regModalWindowP = document.getElementById("rectangleModalWindowP")
let regModalWindowA = document.getElementById("regAreaModalWindowA")
let trgModalWindowP = document.getElementById("triangleModalWindowP")
let trgModalWindowA = document.getElementById("trgAreaModalWindowA")

//3. Acceder al boton de cierre de la ventana modal
let closeModal = document.querySelector(".closeModal")
let closeModalA = document.querySelector(".closeModalA")
let closeModalB = document.querySelector(".closeModalB")
let closeModalC = document.querySelector(".closeModalC")
let closeModalD = document.querySelector(".closeModalD")
let closeModalE = document.querySelector(".closeModalE")

pModalBtnSq.addEventListener("click", (e)=> {
    e.preventDefault()
    sqModalWindowP.style.display = "block"
})

aModalBtnSq.addEventListener("click",(e)=>{
    e.preventDefault()
    sqModalWindowA.style.display = "block"
})

pModalBtnReg.addEventListener("click",(e)=>{
    e.preventDefault()
    regModalWindowP.style.display = "block"
})

aModalBtnReg.addEventListener("click",(e)=>{
    e.preventDefault()
    regModalWindowA.style.display = "block"
})

pModalBtnTrg.addEventListener("click",(e)=>{
    e.preventDefault()
    trgModalWindowP.style.display = "block"
})

aModalBtnTrg.addEventListener("click",(e)=>{
    e.preventDefault()
    trgModalWindowA.style.display = "block"
})

//cerral la ventana modal
closeModal.addEventListener("click", ()=> {
    sqModalWindowP.style.display = "none"
})

closeModalA.addEventListener("click",()=>{
    sqModalWindowA.style.display = "none"
})

closeModalB.addEventListener("click",()=>{
    regModalWindowP.style.display = "none"
})

closeModalC.addEventListener("click",()=>{
    regModalWindowA.style.display = "none"
})

closeModalD.addEventListener("click",()=>{
    trgModalWindowP.style.display = "none"
})

closeModalE.addEventListener("click",()=>{
    trgModalWindowA.style.display = "none"
})





