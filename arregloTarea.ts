/*
*  P. Estructurada: Uso de la clase Tarea para definir el tipo
*  de datos que se almacenan en el arreglo.
* */

import {Tarea} from "./Tarea"


// Arreglo que almacenará las tareas
export let arregloTareas: Tarea[] = [];


// Función para agregar una nueva tarea al arreglo
export function push(tareaNueva: Tarea) {
    arregloTareas.push(tareaNueva);  // Agrega la nueva tarea al final del arreglo
}