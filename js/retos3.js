const temp = document.getElementById("temperatura");
const conversion = document.getElementById("conversion");
const conversionA = document.getElementById("conversionA");
const btn = document.getElementById("btn");

btn.addEventListener("click",e=>{
    e.preventDefault()
    ConTem = parseFloat(temp.value)
    let convesionFaC = (ConTem-32) * 5/9
    let convesionFaK = (ConTem-32) * 5/9 + 273.15
    let conversionCaF = (ConTem * 9/5) + 32
    let conversionCak = ConTem + 273.15
    let conversionKaF = (ConTem - 273.15) * 9/5 + 32 
    let conversionKaC = ConTem - 273.15;
    
        if (conversion.value == "f" && conversionA.value == "c") {
            alert("La conversión es "+convesionFaC.toFixed(2)+" °C")

        }else if (conversion.value == "f" && conversionA.value == "k" ) {
            alert("La conversión es "+convesionFaK.toFixed(2)+" K")

        }else if (conversion.value == "c" && conversionA.value == "f") {
            alert("La conversión es "+conversionCaF.toFixed(2)+" °F")

        }else if(conversion.value == "c" && conversionA.value == "k"){
            alert("La conversión es "+conversionCak.toFixed(2)+" K")

        }else if (conversion.value == "k" && conversionA.value == "f") {
            alert("La conversión es "+conversionKaF.toFixed(2)+" °F")

        }else if (conversion.value == "k" && conversionA.value == "c") {
            alert("La conversión es "+conversionKaC.toFixed(2)+" °C")
        }else{
            alert("No se puede hacer la conversión")
        }
})
