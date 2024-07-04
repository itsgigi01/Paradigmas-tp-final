"use strict";
/*
*  P. Estructurada: Uso de la clase Tarea para definir el tipo
*  de datos que se almacenan en el arreglo.
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.arregloTareas = void 0;
exports.push = push;
// Arreglo que almacenará las tareas
exports.arregloTareas = [];
// Función para agregar una nueva tarea al arreglo
function push(tareaNueva) {
    exports.arregloTareas.push(tareaNueva); // Agrega la nueva tarea al final del arreglo
}
