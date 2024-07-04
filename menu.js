"use strict";
/* P. Estructurada: El diseño general del código sigue un enfoque estructurado,
con funciones que ejecutan tareas concretas de manera organizada.
Se utilizan funciones de y estructuras de control (ej: switch)
El SWITCH generalmente se usa cuando tenemos muchas mas opciones a elegir a
diferencia del IF*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuTareas = menuTareas;
// Importación de funciones desde diferentes archivos
var aux_1 = require("./aux"); // Función para leer entrada del usuario
var agregarTareas_1 = require("./agregarTareas"); // Función para agregar tareas
var verTareasOp_1 = require("./verTareasOp"); // Función para ver tareas
var buscarTarea_1 = require("./buscarTarea"); // Función para buscar una tarea
// Función principal que muestra el menú de tareas
function menuTareas() {
    console.clear();
    console.log("¡Hola!");
    console.log("¿Qué deseas hacer?");
    console.log("  [1] Ver mis tareas.");
    console.log("  [2] Buscar una tarea.");
    console.log("  [3] Agregar una tarea.");
    console.log("  [0] Salir.");
    switchMenu((0, aux_1.leer)(" >: ")); // Llama a switchMenu para manejar la opción seleccionada
}
function switchMenu(opcion) {
    switch (Number(opcion)) {
        case 1: // Opción para ver tareas
            (0, verTareasOp_1.opcionVerTareas)();
            break;
        case 2: // Opción para buscar una tarea
            (0, buscarTarea_1.buscarTarea)();
            break;
        case 3: // Opción para agregar una tarea
            (0, agregarTareas_1.addTareas)();
            break;
        case 0: // Opción para salir del programa
            process.exit(0);
            break;
        default: // Opción por defecto si la entrada no es válida
            console.log("Opcion invalida. Presione una opcion valida del 0 al 3");
            switchMenu((0, aux_1.leer)(">: ")); // Vuelve a solicitar la opción válida al usuario
    }
}
