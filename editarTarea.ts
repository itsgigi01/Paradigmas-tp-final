/* P. Estructurada: El diseño general del código sigue un enfoque estructurado,
con funciones que ejecutan tareas concretas de manera organizada"
* */

/*POO: La funcion EditarTarea hace uso del objeto del tipo Tarea y utiliza funciones para
editar informacion que el mismo contiene
* */


import {Tarea} from "./Tarea";
import {solicitarEstado, solicitarDificultad} from './agregarTareas'
import {leer, volverMenu} from "./aux";


// Función para editar una tarea existente
export function EditarTarea(tarea: Tarea) {
    console.clear();
    console.log(`Estas editando la tarea ${tarea.titulo}`);

    console.log("\n- Si deseas mantener los valores de un atributo, simplemente dejalo en blanco");
    console.log("- Si deseas dejar en blanco un atributo, escribe 'Sin datos'");

    let nuevaDescripcion = leer ("1. Ingresa la Descripcion: ");


    // Llama a la función editarTareas() de la instancia de Tarea, llamando a las funciones que pidan los nuevos atributos
    tarea.editarTareas(nuevaDescripcion, solicitarEstado(), solicitarDificultad());


    volverMenu("\n Datos guardados!\n");// Llama a la función para volver al menú principal con un mensaje de confirmación
}

