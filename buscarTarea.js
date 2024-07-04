"use strict";
/* POO: El codigo trabaja con la clase Tarea y utilizando sus distintas
instancias de tareas existentes.
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarTarea = buscarTarea;
exports.verBusqueda = verBusqueda;
/* P. Funcional: La funcion BuscarTarea() utiliza el metodo filter que
es una función de los arreglos que se utiliza para filtrar elementos según un criterio específico y devuelve un nuevo arreglo
con los elementos que cumplen con ese criterio.

La funcion verBusqueda() utiliza el metodo map() que es una función para transformar
y manipular arreglos de manera eficiente y flexible.
* Inmutable: map() no modifica el arreglo original, sino que crea un nuevo arreglo con los resultados transformados.
*/
/* P. Estructurada: El diseño general del código sigue un enfoque estructurado,
con funciones que ejecutan tareas concretas de manera organizada"
* */
var aux_1 = require("./aux"); // Funciones para entrada del usuario y volver al menú anterior
var arregloTarea_1 = require("./arregloTarea"); // Arreglo de tareas
var verTareasOp_1 = require("./verTareasOp"); // Función para preguntar por ver detalles de tareas
// Función para buscar una tarea por título
function buscarTarea() {
    console.clear();
    console.log("Introduce el título de una tarea para buscarla");
    var palabraClave = (0, aux_1.leer)(">: ").toLowerCase();
    var tareasEncontradas = arregloTarea_1.arregloTareas.filter(function (tarea) {
        return tarea.titulo.toLowerCase().includes(palabraClave);
    });
    verBusqueda(tareasEncontradas, palabraClave);
}
// Función para mostrar el resultado de la búsqueda de tareas
function verBusqueda(tareasEncontradas, palabraClave) {
    switch (tareasEncontradas.length) {
        case 0:
            (0, aux_1.volverMenu)("No hay tareas relacionadas con la busqueda"); // Si no se encuentran tareas, vuelve al menú anterior
            break;
        default:
            console.log("\nEstas son las tareas relacionadas: \n");
            // Muestra las tareas encontradas enumeradas con su título
            tareasEncontradas.map(function (tarea, index) {
                console.log("[".concat(index + 1, "] ").concat(tarea.titulo, "\n"));
            });
            (0, verTareasOp_1.preguntaPorVerDetalles)(tareasEncontradas); // Pregunta al usuario si desea ver los detalles de alguna tarea encontrada
            break;
    }
}
