"use strict";
/* P. Estructural: El codigo sigue una manera secuancial y organizada utilizando
estructuras de control (sw) para manejar las distintas situaciones del codigo
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verDetallesDeTareas = verDetallesDeTareas;
exports.verDificultad = verDificultad;
exports.obtenerDia = obtenerDia;
exports.obtenerMes = obtenerMes;
exports.obtenerAnio = obtenerAnio;
exports.preguntarEditarOMenu = preguntarEditarOMenu;
var aux_1 = require("./aux"); // Funciones para entrada del usuario y volver al menú
var editarTarea_1 = require("./editarTarea"); // Función para editar una tarea
//import {arregloTareas} from "./arregloTarea";
// Función para mostrar los detalles de una tarea específica
function verDetallesDeTareas(tareas) {
    console.clear();
    console.log("Esta es la tarea que elegiste");
    console.log("  ".concat(tareas.titulo)); // Muestra el título
    console.log("  ".concat(tareas.descripcion ? tareas.descripcion : 'Sin Datos')); // Muestra la descripción
    console.log("  Estado:      ".concat(tareas.estado)); // Muestra el estado de la tarea.
    verDificultad(tareas); // Llama a la función para mostrar la dificultad de la tarea
    console.log("  Fecha de Creacion:      ".concat(obtenerDia(tareas.fechaCreacion), "/").concat(obtenerMes(tareas.fechaCreacion), "/").concat(obtenerAnio(tareas.fechaCreacion)));
    preguntarEditarOMenu(tareas); // Llama a la función para preguntar al usuario si desea editar la tarea o volver al menú
}
// Función para mostrar la dificultad de una tarea
function verDificultad(tareas) {
    switch (tareas.dificultad) {
        case 'Facil':
            console.log("  Dificultad : 🌕🌑🌑");
            break;
        case "Medio":
            console.log("  Dificultad : 🌕🌕🌑");
            break;
        case "Dificil":
            console.log("  Dificultad : 🌕🌕🌕");
            break;
    }
}
// Función para mostrar la fecha de creación de una tarea. FUNCIONES PURAS
function obtenerDia(fecha) {
    return String(fecha.getDate()).padStart(2, '0');
}
function obtenerMes(fecha) {
    return String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
}
function obtenerAnio(fecha) {
    return fecha.getFullYear();
}
/*.padStart(2, '0') asegura que el día tenga al menos 2 dígitos, añadiendo un 0 al inicio si es necesario.*/
// Función para preguntar al usuario si desea editar la tarea o volver al menú principal
function preguntarEditarOMenu(tareas) {
    console.log("Si deseas editarla, presione E, o presiona 0 para volver");
    var opcion = (0, aux_1.leer)(">: ").toLowerCase();
    switch (opcion) {
        case 'e':
            (0, editarTarea_1.EditarTarea)(tareas); // Llama a la función para editar la tarea
            break;
        case '0':
            (0, aux_1.volverMenu)(""); // Llama a la función para volver al menú principal
            break;
        default:
            console.log("Opcion incorrecta!");
            (0, aux_1.leer)("\nPresione enter para continuar..."); // Mensaje de error si la opción ingresada no es válida
            verDetallesDeTareas(tareas); // Vuelve a mostrar los detalles de la tarea
            break;
    }
}
