let termBtn = document.getElementById("termsBtn")
let termModal = document.getElementById("modal")
let terModalContent = document.getElementById("modalContent")
let closeModal = document.getElementById("closeModal")

termBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    termModal.style.display = "block"
})


closeModal.addEventListener("click",(e)=>{
    e.preventDefault()
    termModal.style.display = "none"
})