
function $(element){
    return document.quuerySelector(element)
};


const tareas = [
    { 
        Titulo: "aprender css",
        Estado: "Terminado"
      },
      { 
      Titulo: "aprender css",
      Estado: "En progreso"
    },
    {
        Titulo: "Aprender js",
        Estado: "Pendiente"
    },
    
]


window.addEventListener("load", () =>{

const  $body = document.querySelector(".body");
const $btnModo = document.querySelector(".btn-modo");
 const $tituloUno = document.querySelector("#tituloUno");
  const $miSeccion = document.querySelector(".mi-seccion");
const $main = document.querySelector(".main");
const $cajaTerminado = document.querySelector("#contenedor-terminado");
const $cajaProgreso = document.querySelector("#contenedor-progreso");
const $cajaPendiente = document.querySelector("#contenedor-pendiente");
const $btnCrear =document.querySelector ("#crear");
const $btnVaciar =document.querySelector  ("#vaciar");
const $btnEliminar = document.querySelector("#eliminar")
const $interProc = document.querySelector(".interior")

//MODO OSCURO Y CLARO//  
$btnModo.addEventListener("click", (e) =>{
    $body.classList.toggle("dark")
    if($body.classList.contains("dark")){
        $btnModo.innerText = "🌑"
    }else{
        $btnModo.innerHTML = "🌞"
    }
});



function paint (nodo, datos){
     nodo.innerHTML = "";
     datos.forEach(tarea => {
        nodo.innerHTML +=  ` <div class="interior">
       <p> ${tarea.Titulo}</p> 
       <p> ${tarea.Estado}</p> 
        <button id="editar">Editar</button>
        <button id="eliminar">Eliminar</button>
        <button id="vaciar">Vaciar</button>
        </div> `
     });

};

const tareasTerminadas = tareas.filter(elem => elem.Estado === "Terminado")
paint($cajaTerminado,tareasTerminadas);


const tareasProgreso = tareas.filter(elem => elem.Estado === "En Progreso")
 paint($cajaProgreso,tareasProgreso);


 const tareasPendientes = tareas.filter(elem => elem.Estado === "Pendiente")
paint($cajaPendiente,tareasPendientes);



//del window//
});






// const crearTarea = () =>{
    
// }

// $btnCrear.addEventListener("click"), (e) =>{
//     $cajaUno.innerText = $tituloUno.value

// }









