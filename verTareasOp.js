"use strict";
/* P. Estructurada: El diseño general del código sigue un enfoque estructurado,
con funciones que ejecutan tareas concretas de manera organizada. Y tambien
hace uso de funciones de control como el sw para manejar el flujo del codigo
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionVerTareas = opcionVerTareas;
exports.preguntaPorVerDetalles = preguntaPorVerDetalles;
/* P. Funcional: la funcion mostrarTareasFiltradas  utilizan "filter"
 para crear nuevas listas de tareas sin modificar el estado original del arreglo de tarea
* */
/*POO: El codigo utiliza la clase tareas y realiza distintas operaciones segun la instancias.
*  */
var aux_1 = require("./aux"); // Funciones para entrada del usuario y volver al menú anterior
var arregloTarea_1 = require("./arregloTarea");
var detallesTarea_1 = require("./detallesTarea"); // Función para ver detalles de una tarea
// Función principal para mostrar opciones de ver tareas
function opcionVerTareas() {
    console.clear();
    console.log("¿Que tareas deseas ver?");
    console.log("  [1] Todas.");
    console.log("  [2] Pendientes.");
    console.log("  [3] En curso.");
    console.log("  [4] Terminadas.");
    console.log("  [0] Volver");
    muestraPorEstado((0, aux_1.leer)(">: ")); // Llama a muestraPorEstado para manejar la opción seleccionada
}
// Función para mostrar tareas según el estado seleccionado
function muestraPorEstado(opcion) {
    switch (arregloTarea_1.arregloTareas.length) {
        case 0:
            console.log("No hay tareas."); //el tamaño del arreglo es 0 por lo tanto no hay tareas agregadas
            (0, aux_1.volverMenu)("");
            break;
        default:
            switch (opcion) {
                case '0':
                    (0, aux_1.volverMenu)(""); // Vuelve al menú anterior si se selecciona '0'
                    break;
                case '1': //ver todas
                    mostrarTodasTareas(arregloTarea_1.arregloTareas);
                    break;
                case '2': // ver pendientes
                    mostrarTareasFiltradas('pendiente', arregloTarea_1.arregloTareas);
                    break;
                case '3': // ver en curso
                    mostrarTareasFiltradas('en curso', arregloTarea_1.arregloTareas);
                    break;
                case '4': //ver terminadas
                    mostrarTareasFiltradas('terminada', arregloTarea_1.arregloTareas);
                    break;
                default:
                    console.log("Opcion Invalida. Eliga una opcion entre 0 y 4");
                    opcionVerTareas(); // Vuelve a solicitar la opción válida al usuario
            }
            break;
    }
}
// Función para mostrar todas las tareas
/*forEach es un método que se utiliza para iterar sobre
 los elementos de un array y ejecutar una función proporcionada
 una vez por cada elemento en el orden de inserción*/
function mostrarTodasTareas(arregloTareas) {
    console.clear();
    if (arregloTareas.length === 0) {
        console.log("No hay tareas para mostrar.");
        (0, aux_1.volverMenu)("");
    }
    else {
        console.log("Estas son todas tus tareas:"); //recorre la tarea y muestra los indices mas el titulo
        arregloTareas.forEach(function (tarea, index) {
            console.log("[".concat(index + 1, "] ").concat(tarea.titulo, " "));
        });
        preguntaPorVerDetalles(arregloTareas); // Pregunta si se desean ver detalles de alguna tarea
    }
}
// Función para mostrar tareas filtradas por estado
/* arregloTareas.filter(tarea => tarea.estado === estado);

Esta línea filtra las tareas del arreglo arregloTareas
(que se asume es una lista de tareas de tipo Tarea) para
incluir solo aquellas cuyo estado coincide con el estado pasado como argumento (estado).
 */
function mostrarTareasFiltradas(estado, arregloTareas) {
    console.clear();
    //utilizo filter para filtrar las tareas segun el estado y asi guardarlas en nuevo arreglo "Tareas Filtradas"
    var tareasFiltradas = arregloTareas.filter(function (tarea) { return tarea.estado === estado; });
    switch (tareasFiltradas.length) { //En caso de que no haya tareas de este tipo va directamente al case 0.
        case 0:
            console.log("No hay tareas. ");
            (0, aux_1.volverMenu)("");
            break;
        default:
            console.log("Estas son todas tus tareas con el Estado ".concat(estado, ":"));
            tareasFiltradas.forEach(function (tarea, index) {
                console.log("[".concat(index + 1, "] ").concat(tarea.titulo, " "));
            });
            preguntaPorVerDetalles(tareasFiltradas); // Pregunta si se desean ver detalles de alguna tarea filtrada
            break;
    }
}
// Función para preguntar si se desean ver detalles de alguna tarea
function preguntaPorVerDetalles(arregloTareas) {
    console.log("\n¿Deseas ver los detalles de alguna?");
    console.log("\nIntroduce el número para verlo o 0 para volver");
    muestraDetallesOmenu((0, aux_1.leer)("> : "), arregloTareas); // Llama a muestraDetallesOmenu para manejar la opción seleccionada
}
// Función para mostrar detalles de una tarea o volver al menú anterior
function muestraDetallesOmenu(opcion, arregloTareas) {
    switch (opcion) {
        case '0':
            (0, aux_1.volverMenu)(""); // Vuelve al menú anterior si se selecciona '0'
            break;
        default:
            var intOpcion = parseInt(opcion, 10);
            var opcionCorrecta = !isNaN(intOpcion) && intOpcion >= 1 && intOpcion <= arregloTareas.length;
            opcionCorrecta //operador ternario
                ? (0, detallesTarea_1.verDetallesDeTareas)(arregloTareas[intOpcion - 1]) // Muestra detalles de la tarea seleccionada
                : (console.log("Opción no válida. Por favor, ingrese un número válido."),
                    mostrarTodasTareas(arregloTareas)); // Vuelve a mostrar todas las tareas si la opción no es válida
            break;
    }
}
