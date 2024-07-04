"use strict";
/* Programacion estructurada: AddTareas es secuencial y estructurado. Y
se utilizan estructuras de control (SWITCH) para manejar opciones de
entrada del usuario de manera secuencial
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicitarDescripcion = solicitarDescripcion;
exports.solicitarEstado = solicitarEstado;
exports.solicitarDificultad = solicitarDificultad;
exports.addTareas = addTareas;
/* POO: Se utiliza la clase `Tarea` y  se crea la informacion para objetos  del tipo `Tarea`
con atributos y métodos asociados.
 * */
var aux_1 = require("./aux"); // Funciones para entrada del usuario y volver al menú anterior
var Tarea_1 = require("./Tarea");
var arregloTarea_1 = require("./arregloTarea"); // Función para agregar una tarea al arreglo de tareas
// Función para solicitar y devolver el título de una tarea
function solicitarTitulo() {
    var titulo = (0, aux_1.leer)("1. Ingresa el titulo: > ");
    return titulo;
}
// Función para solicitar y devolver la descripción de una tarea
function solicitarDescripcion() {
    var descripcion = (0, aux_1.leer)("2. Ingresa la descripcion: > ");
    return descripcion;
}
// Función para solicitar y devolver el estado de una tarea (pendiente o en curso)
function solicitarEstado() {
    var estadoOP = (0, aux_1.leer)("3. Ingresa el estado de la tarea: [P] Pendiente o [E] En curso: > ").toLowerCase();
    var estado;
    switch (estadoOP) {
        case 'p':
            estado = 'pendiente';
            break;
        case 'e':
            estado = 'en curso';
            break;
        default:
            console.log("Entrada inválida. Por favor ingrese 'P' para Pendiente o 'E' para En curso.");
            return solicitarEstado();
    }
    return estado;
}
// Función para solicitar y devolver la dificultad de una tarea (fácil, medio, difícil)
function solicitarDificultad() {
    var dificultadOP = (0, aux_1.leer)("4. Ingresa la dificultad de la tarea: [F] Facil, [M] Medio, [D] Dificil : > ").toLowerCase();
    var Dificultad;
    switch (dificultadOP) {
        case 'f':
            Dificultad = 'Facil';
            break;
        case 'm':
            Dificultad = 'Medio';
            break;
        case 'd':
            Dificultad = 'Dificil';
            break;
        default:
            console.log("Entrada inválida. Por favor ingrese 'F' para Facil, 'M' para Medio, 'D' para Dificil");
            return solicitarDificultad();
    }
    return Dificultad;
}
// Función principal para agregar una tarea
function addTareas() {
    console.clear();
    var tareaNueva = new Tarea_1.Tarea(solicitarTitulo(), solicitarDescripcion(), solicitarEstado(), solicitarDificultad());
    (0, arregloTarea_1.push)(tareaNueva);
    (0, aux_1.volverMenu)("\n¡Datos guardados!\n");
}
