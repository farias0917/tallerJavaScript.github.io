//Acceder al botón para mostrar el resultado
let sqBtnPerimeter = document.getElementById("squarePerimeter");
let sqBtnArea = document.getElementById("squareArea");
let recBtnPerimeter = document.getElementById("rectanglePerimeter")
let recBtnArea = document.getElementById("rectangleArea")

//Acceder al parrafo que mostrá el resultado
let texto = document.getElementById("texto");
let texto2 = document.getElementById("texto2");
let texto3 = document.getElementById("texto3");
let texto4 = document.getElementById("texto4");

sqBtnPerimeter.addEventListener("click",(e)=>{
    e.preventDefault();
    let longitud = document.getElementById("longitud").value
    parseInt(longitud);
    let resultado = longitud * 4 
    if (longitud == "" || isNaN(longitud)) {
        texto.innerHTML = "¡hubo un error!";
        texto.classList.remove("texto")
        texto.classList.add("error")
    }else{
        texto.innerHTML = `El perímetro es: ${resultado}`
        texto.classList.add("texto")
        texto.classList.remove("error")
    }
})

sqBtnArea.addEventListener("click",(e)=>{
    e.preventDefault();
    let lado = document.getElementById("lado").value
    parseInt(lado);
    let resultado = lado * lado 
    if (lado == "" || isNaN(lado)) {
        texto2.innerHTML = "¡hubo un error!"
        texto2.classList.remove("texto2")
        texto2.classList.add("error2")
    }else{
        texto2.innerHTML = `El area es: ${resultado}cm²`
        texto2.classList.add("texto")
        texto2.classList.remove("error2")
    }
})

recBtnPerimeter.addEventListener("click",(e)=>{
    e.preventDefault();
    let lado1 = document.getElementById("lado1R")
    let lado2 = document.getElementById("lado2R")

    let lado1C = parseInt(lado1.value);
    let lado2C = parseInt(lado2.value);
    let resultado = (lado1C + lado2C)*2
    if (isNaN(resultado)) {
        texto3.innerHTML = "¡hubo un error!"
        texto3.classList.remove("texto3")
        texto3.classList.add("error2")
    }else{
        texto3.innerHTML = `El perimetro es: ${resultado}`
        texto3.classList.add("texto")
        texto3.classList.remove("error2")
    }
})

recBtnArea.addEventListener("click",(e)=>{
    e.preventDefault();
    let lado1 = document.getElementById("lado1Ra")
    let lado2 = document.getElementById("lado2Ra")
    let lado1C = parseInt(lado1.value);
    let lado2C = parseInt(lado2.value);
    let resultado = lado1C * lado2C
    if (isNaN(resultado)) {
        texto4.innerHTML = "¡hubo un error!"
        texto4.classList.remove("texto3")
        texto4.classList.add("error2")
    }else{
        texto4.innerHTML = `El area es: ${resultado}`
        texto4.classList.add("texto")
        texto4.classList.remove("error2")
    }
})