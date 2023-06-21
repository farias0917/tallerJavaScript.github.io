const selectName = document.getElementById("name")
const selectLastName = document.getElementById("lastName")
const selectActivity = document.getElementById("Activity")
const btn = document.getElementById("btn")
const texto = document.getElementById("text")

btn.addEventListener("click",(e)=>{
    e.preventDefault() 
   let name =  selectName.value
   let lastName =  selectLastName.value
   let activity = selectActivity.value

   const instructor1 = {
    nombre: "Jennifer",
    apellido: "Fajardo",
    activity: "JavaScript"
   }

   const instructor2 = {
    nombre: "Margarita",
    apellido: "Guarin",
    activity: "Prototipado"
   }

   const instructor3 = {
    nombre: "Erik",
    apellido: "Granados",
    activity: "Java"
   }

   const instructor4 = {
    nombre: "Cristian",
    apellido: "Buitrago",
    activity: "Diseño Proyecto"
   }

   const instructor5 = {
    nombre: "Sandra",
    apellido: "Rueda",
    activity: "Base de datos"
   }

   const instructor6 = {
    nombre: "Julio",
    apellido: "Buitrago",
    activity: "Derecho"
   }

   const instructor7 = {
    nombre: "Manuel",
    apellido: "Garavito",
    activity: "Python"
   }

    if (instructor1.nombre == name && instructor1.apellido == lastName && instructor1.activity == activity
    || instructor2.nombre == name && instructor2.apellido == lastName && instructor2.activity == activity ||
    instructor3.nombre == name && instructor3.apellido == lastName && instructor3.activity == activity ||
    instructor3.nombre == name && instructor3.apellido == lastName && instructor3.activity == activity ||
    instructor4.nombre == name && instructor4.apellido == lastName && instructor4.activity == activity ||
    instructor5.nombre == name && instructor5.apellido == lastName && instructor5.activity == activity ||
    instructor6.nombre == name && instructor6.apellido == lastName && instructor6.activity == activity ||
    instructor7.nombre == name && instructor7.apellido == lastName && instructor7.activity == activity) {
        texto.innerHTML = "Es correcto 👍"
        texto.setAttribute("class","success")
    }else{
        texto.innerHTML = "Es incorrecto 👎";
        texto.setAttribute("class","error")
    }
})