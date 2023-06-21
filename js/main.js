let btn = document.querySelector(".jsContainer")

let pt = document.querySelector(".containerChallenge")
btn.addEventListener("click",function mostrarCon(){
    if (pt.className == "containerChallenge") {
        pt.className = "containerChallenge containerChallenge2"
    }
})

let btn2 = document.querySelector(".fa-arrow-right-from-bracket")
btn2.addEventListener("click",function ocultarCon() {
    pt.className = "containerChallenge"
})