/*declaracion de las constantes necesarias*/
const btnAdd = document.querySelector('#btnAdd');
const inputText = document.querySelector('#inputNewTask')
const listTasks = document.querySelector('#Tasks')

function addTask(tarea){
    //Está función se encarga de añadir las tareas a 
    // la lista de html dinámicamente. 

    //Creación de la tarea
    const newItem = document.createElement('li');
    newItem.textContent = tarea;
    
    //creación del boton para eliminar su tarea asociada
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "X";
    btnEliminar.onclick =()=> newItem.remove();

    //asociar los elementos , tanto el listItem
    //como el boton.
    newItem.appendChild(btnEliminar);

    //Agregar tarea a la lista
    listTasks.appendChild(newItem); 

    inputText.value = "";
}

btnAdd.addEventListener('click', e =>{
    //Se llama a la funcion que crea las tareas y se valida 
    // que el texto del input no sea vacio

    const text = inputText.value;
    if(text!=""){
        addTask(text);
    }
    console.log("Hola, Ha hecho click. XD")
});

