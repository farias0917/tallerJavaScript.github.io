let btn = document.getElementById("btnConvert")
let p = document.getElementById("message")
let clr = document.getElementById("clear")
btn.addEventListener("click", function Convertir(e) {
    e.preventDefault()

    let text = document.getElementById("text").value
    let op = document.getElementById("options").value
    
    if (text == "") {
        p.classList.add("error")
        p.innerHTML="¡El campo no puede quedar vacio!"
    }else{
         p.classList.remove("error")
         p.innerHTML=""

         switch (op) {
            case "long":
                alert("La longitud de la palabra ingresada es de: "+text.length+" caracteres")
                break;
            case "convertMayus":
                alert(text.toUpperCase())
                break;
            case "convertMin":
                alert(text.toLowerCase())
                break;  
            case "char":
                alert("El primer caracter es: "+text.charAt(0).toUpperCase())
                break;            
            default:
                p.classList.add("error")
                p.innerHTML="Tiene que seleccionar alguna de las opciones"
                break;
         }
    }
    
})

clr.addEventListener("click", function Limpiar(e) {
    e.preventDefault
    p.classList.remove("error")
    p.innerHTML = ""
    p.style.transition = ".5s ease-in"
})
