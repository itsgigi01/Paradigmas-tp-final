"use strict";
/* P. Estructurada: El diseño general del código sigue un enfoque estructurado,
con funciones que ejecutan tareas concretas de manera organizada"
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditarTarea = EditarTarea;
var agregarTareas_1 = require("./agregarTareas");
var aux_1 = require("./aux");
// Función para editar una tarea existente
function EditarTarea(tarea) {
    console.clear();
    console.log("Estas editando la tarea ".concat(tarea.titulo));
    console.log("\n- Si deseas mantener los valores de un atributo, simplemente dejalo en blanco");
    console.log("- Si deseas dejar en blanco un atributo, escribe 'Sin datos'");
    var nuevaDescripcion = (0, aux_1.leer)("1. Ingresa la Descripcion: ");
    // Llama a la función editarTareas() de la instancia de Tarea, llamando a las funciones que pidan los nuevos atributos
    tarea.editarTareas(nuevaDescripcion, (0, agregarTareas_1.solicitarEstado)(), (0, agregarTareas_1.solicitarDificultad)());
    (0, aux_1.volverMenu)("\n Datos guardados!\n"); // Llama a la función para volver al menú principal con un mensaje de confirmación
}
