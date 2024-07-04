/* P. Estructurada: El diseño general del código sigue un enfoque estructurado,
con funciones que ejecutan tareas concretas de manera organizada. Y tambien
hace uso de funciones de control como el sw para manejar el flujo del codigo
* */

/* P. Funcional: la funcion mostrarTareasFiltradas  utilizan "filter"
 para crear nuevas listas de tareas sin modificar el estado original del arreglo de tarea
* */

/*POO: El codigo utiliza la clase tareas y realiza distintas operaciones segun la instancias.
*  */


import {leer, volverMenu} from "./aux";  // Funciones para entrada del usuario y volver al menú anterior
import {arregloTareas} from "./arregloTarea";
import {EstadoTareas, Tarea} from "./Tarea";
import {verDetallesDeTareas} from "./detallesTarea"; // Función para ver detalles de una tarea


// Función principal para mostrar opciones de ver tareas
export function opcionVerTareas(): void {
    console.clear();
    console.log("¿Que tareas deseas ver?");
    console.log("  [1] Todas.");
    console.log("  [2] Pendientes.");
    console.log("  [3] En curso.");
    console.log("  [4] Terminadas.");
    console.log("  [0] Volver");
    muestraPorEstado(leer(">: ")); // Llama a muestraPorEstado para manejar la opción seleccionada
}

// Función para mostrar tareas según el estado seleccionado
function muestraPorEstado(opcion: string): void {
    switch (arregloTareas.length) {
        case 0:
            console.log("No hay tareas."); //el tamaño del arreglo es 0 por lo tanto no hay tareas agregadas
            volverMenu("");
            break;
        default:
            switch (opcion) {
                case '0':
                    volverMenu(""); // Vuelve al menú anterior si se selecciona '0'
                    break;
                case '1': //ver todas
                    mostrarTodasTareas(arregloTareas);
                    break;
                case '2': // ver pendientes
                    mostrarTareasFiltradas('pendiente', arregloTareas);
                    break;
                case '3': // ver en curso
                    mostrarTareasFiltradas('en curso', arregloTareas);
                    break;
                case '4': //ver terminadas
                    mostrarTareasFiltradas('terminada', arregloTareas);
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

function mostrarTodasTareas(arregloTareas: Tarea[]): void {
    console.clear();
    if (arregloTareas.length === 0) {
        console.log("No hay tareas para mostrar.");
        volverMenu("");

    } else {

        console.log("Estas son todas tus tareas:"); //recorre la tarea y muestra los indices mas el titulo
        arregloTareas.forEach((tarea, index) => {
            console.log(`[${index + 1}] ${tarea.titulo} `);
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

function mostrarTareasFiltradas(estado: EstadoTareas, arregloTareas: Tarea[]): void {
    console.clear();

        //utilizo filter para filtrar las tareas segun el estado y asi guardarlas en nuevo arreglo "Tareas Filtradas"
        const tareasFiltradas: Tarea[] = arregloTareas.filter(tarea => tarea.estado === estado);

        switch (tareasFiltradas.length){ //En caso de que no haya tareas de este tipo va directamente al case 0.
            case 0:
                console.log("No hay tareas. ");
                volverMenu("");
                break;
            default:
                console.log(`Estas son todas tus tareas con el Estado ${estado}:`);
                tareasFiltradas.forEach((tarea, index) => { //Muestra las tareas filtradas que tienen el estado pedido
                    console.log(`[${index + 1}] ${tarea.titulo} `);
                });
                preguntaPorVerDetalles(tareasFiltradas);  // Pregunta si se desean ver detalles de alguna tarea filtrada
                break;
        }



}


// Función para preguntar si se desean ver detalles de alguna tarea
export function preguntaPorVerDetalles(arregloTareas: Tarea[]): void {
    console.log("\n¿Deseas ver los detalles de alguna?");
    console.log("\nIntroduce el número para verlo o 0 para volver");
    muestraDetallesOmenu(leer("> : "), arregloTareas); // Llama a muestraDetallesOmenu para manejar la opción seleccionada
}


// Función para mostrar detalles de una tarea o volver al menú anterior
function muestraDetallesOmenu(opcion: string, arregloTareas: Tarea[]): void {

    switch (opcion) {
        case '0':
            volverMenu(""); // Vuelve al menú anterior si se selecciona '0'
            break;
        default:
            const intOpcion: number = parseInt(opcion, 10);
            const opcionCorrecta: boolean = !isNaN(intOpcion) && intOpcion >= 1 && intOpcion <= arregloTareas.length;
            opcionCorrecta //operador ternario
                ? verDetallesDeTareas(arregloTareas[intOpcion - 1]) // Muestra detalles de la tarea seleccionada
                : (console.log("Opción no válida. Por favor, ingrese un número válido."),
                    mostrarTodasTareas(arregloTareas)); // Vuelve a mostrar todas las tareas si la opción no es válida
            break;
    }

}
