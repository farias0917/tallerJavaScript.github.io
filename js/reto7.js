const number = /^[0-9]{5,10}$/;
const text = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
const date = /^[0-9]$/;
const email = /^[a-zA-Z0-9_.+-]+@misena\.edu\.co$/
const pass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.()])[A-Za-z\d!@#$%^&*.()]{10,}$/


const form = document.getElementById("formValidation")
const feedback = document.querySelector("#feedback")
const feedback2 = document.querySelector("#feedback2")
const feedback3 = document.querySelector("#feedback3")
const feedback4 = document.querySelector("#feedback4")
const texto = "holiii a todos"
console.log(texto.split(""));

//const docNumber = form.docNumber.value;
// const name = form.name.value;
// const lastName = form.lastName.value;
// const birthday = form.birthday.value;

//TIPO DE DOCUMENTO

form.docType.addEventListener("change",e=>{
  e.preventDefault();

  if (form.docType.value == "T.I" || form.docType.value == "C.C") {
    form.docType.style.border = "1px solid greenyellow"
      flag = true;
  }
})


//NÚMERO DE DOCUMENTO

form.docNumber.addEventListener("input",e=>{
    e.preventDefault();

    console.log("Estoy accediendo al valor del campo");

    if (number.test(e.target.value)) {
        form.docNumber.setAttribute("class","success");
        feedback.classList.remove("feedback")
        feedback.textContent = "";
        flag = true;
    }else{
        form.docNumber.setAttribute("class","error")
        feedback.setAttribute("class","feedback")
        feedback.style.visibility = "visible";
        feedback.style.opacity = "1";
        feedback.style.display= "block";
        feedback.style.transition= ".5s";
        feedback.textContent = "Número de documento inválido";
         flag = false;
    }
})

//NOMBRE
form.name.addEventListener("input",e=>{
  e.preventDefault();
  if (text.test(e.target.value)) {
    form.name.setAttribute("class","success")
    feedback2.classList.remove("feedback")
        feedback2.textContent = "";
        flag = true;
}else{
    form.name.setAttribute("class","error")
    feedback2.setAttribute("class","feedback")
        feedback2.style.visibility = "visible";
        feedback2.style.opacity = "1";
        feedback2.style.display= "block";
        feedback2.style.transition= ".5s";
        feedback2.textContent = "Nombre inválido";
         flag = false;
}
})

//APELLIDO
form.lastName.addEventListener("input",e=>{
  e.preventDefault();
  if (text.test(e.target.value)) {
    form.lastName.setAttribute("class","success")
    feedback3.classList.remove("feedback")
        feedback3.textContent = "";
        flag = true;
}else{
    form.lastName.setAttribute("class","error")
    feedback3.setAttribute("class","feedback")
        feedback3.style.visibility = "visible";
        feedback3.style.opacity = "1";
        feedback3.style.display= "block";
        feedback3.style.transition= ".5s";
        feedback3.textContent = "Apellido inválido";
         flag = false;
}
})

//FECHA
form.birthday.addEventListener("input",e=>{
  e.preventDefault();

  const actualDate = new Date()
  const actualYear = actualDate.getFullYear()
console.log(actualYear);
  const birthday = form.birthday.value
  const selectDate = birthday.split("-")
  const year = parseInt( selectDate[0]);
  console.log(year);
  // const month = parseInt( selectDate[1]);
  // const day = parseInt( selectDate[2]);

  const restultado = actualYear - year;
  console.log(restultado);

if (!isNaN(restultado)) {
  if (restultado >= 18) {
    form.birthday.setAttribute("class","success")
    feedback4.classList.remove("feedback")
        feedback4.textContent = "";
        flag = true;
  } else{
    form.birthday.setAttribute("class","error")
    feedback4.setAttribute("class","feedback")
        feedback4.style.visibility = "visible";
        feedback4.style.opacity = "1";
        feedback4.style.display= "block";
        feedback4.style.transition= ".5s";
        feedback4.textContent = "Restricción de edad, eres menor de 18";
         flag = false;
  }
}else{
  form.birthday.setAttribute("class","error")
    feedback4.setAttribute("class","feedback")
        feedback4.style.visibility = "visible";
        feedback4.style.opacity = "1";
        feedback4.style.display= "block";
        feedback4.style.transition= ".5s";
        feedback4.textContent = "Fecha inválida";
         flag = false;
}
})

//CORREO
form.email.addEventListener("input",e=>{
  e.preventDefault();
  if (email.test(e.target.value)) {
    form.email.setAttribute("class","success")
    feedback5.classList.remove("feedback")
        feedback5.textContent = "";
        flag = true;
}else{
    form.email.setAttribute("class","error")
    feedback5.setAttribute("class","feedback")
        feedback5.style.visibility = "visible";
        feedback5.style.opacity = "1";
        feedback5.style.display= "block";
        feedback5.style.transition= ".5s";
        feedback5.textContent = "solo se permiten correos con el dominio @misena.edu.co";
         flag = false;
}
})

//CONTRASEÑA
form.pass.addEventListener("input",e=>{
  e.preventDefault();
  if (pass.test(e.target.value)) {
    form.pass.setAttribute("class","success")
    feedback6.classList.remove("feedback")
        feedback6.textContent = "";
        flag = true;
}else{
    form.pass.setAttribute("class","error")
    feedback6.setAttribute("class","feedback")
        feedback6.style.visibility = "visible";
        feedback6.style.opacity = "1";
        feedback6.style.display= "block";
        feedback6.style.transition= ".5s";
        feedback6.textContent = `La contraseña no cumple con el formato establecido`;
         flag = false;
}
})

//CONFIRMAR CONTRASEÑA
form.passConfirm.addEventListener("input",e=>{
  e.preventDefault();
  let password = form.pass.value
  let confirmPass = form.passConfirm.value
  if (confirmPass === password) {
    form.passConfirm.setAttribute("class","success")
    feedback7.classList.remove("feedback")
        feedback7.textContent = "";
        flag = true;
  }else{
    form.passConfirm.setAttribute("class","error")
    feedback7.setAttribute("class","feedback")
        feedback7.style.visibility = "visible";
        feedback7.style.opacity = "1";
        feedback7.style.display= "block";
        feedback7.style.transition= ".5s";
        feedback7.textContent = "Las contraseñas no coinciden";
         flag = false;
  }
  console.log(password);
})


//TÉRMINOS Y CONDICIONES
form.tCheckbox.addEventListener("input",()=>{
  let elemento = form.tCheckbox.checked;
  if (elemento == false) {
    feedback8.setAttribute("class","feedback")
        feedback8.style.visibility = "visible";
        feedback8.style.opacity = "1";
        feedback8.style.display= "block";
        feedback8.style.transition= ".5s";
        feedback8.textContent = "Tiene que aceptar terminos y condiciones";
         flag = false;
  }else{
    feedback8.classList.remove("feedback")
    feedback8.textContent = "";
  }
})

 form.addEventListener("submit",e=>{
   e.preventDefault()
   let elemento = form.tCheckbox.checked;
   if (form.docType.value !== "T.I" && form.docType.value !== "C.C") {
    alert("Debe seleccionar el tipo de documento")
  }
   else if (form.docNumber.value == null || form.docNumber.value == 0 || flag == false) {
     form.docNumber.focus();
     form.docNumber.setAttribute("class","error")
   }

   else if (form.name.value == null || form.name.value == 0 || flag == false) {
    form.name.focus();
    form.name.setAttribute("class","error")
  }

  
 else if (form.lastName.value == null || form.lastName.value == 0 || flag == false) {
    form.lastName.setAttribute("class","error")
  }

  else if (form.birthday.value == null || form.birthday.value == 0 || flag == false) {
    form.birthday.setAttribute("class","error")
  }

  else if (form.email.value == null || form.email.value == 0 || flag == false) {
    form.email.focus();
    form.email.setAttribute("class","error")
  }

  else if (form.pass.value == null || form.pass.value == 0 || flag == false) {
    form.pass.setAttribute("class","error")
  }

  else if (form.passConfirm.value == null || form.passConfirm.value == 0 || flag == false) {
    form.passConfirm.setAttribute("class","error")
  }


  else if (elemento == false) {

    feedback8.setAttribute("class","feedback")
        feedback8.style.visibility = "visible";
        feedback8.style.opacity = "1";
        feedback8.style.display= "block";
        feedback8.style.transition= ".5s";
        feedback8.textContent = "Tiene que aceptar terminos y condiciones";
         flag = false;
  }else{
    form.submit();
    feedback8.classList.remove("feedback")
    feedback8.textContent = "";
  }
 })



