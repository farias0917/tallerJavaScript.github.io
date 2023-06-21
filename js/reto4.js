let form = document.getElementById("form");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();


let lado1 = form.lado1.value;
let lado2 = form.lado2.value;
let lado3 = form.lado3.value;

  if (!isNaN(parseInt(lado1)) && !isNaN(parseInt(lado2)) && !isNaN(parseInt(lado3))) {
    if (lado1 == lado2 && lado1 == lado3) {
      alert("Es un triangulo equilátero");
    } else if (lado2 == lado1 || lado1 == lado3 || lado2 == lado3) {
      alert("Es un triangulo isósceles");
    } else {
      alert("Es un triangulo escaleno");
    }
  }else{
    alert("Hubo un error")
  }
});
