/* P. Estructural: El codigo sigue una manera secuancial y organizada utilizando
estructuras de control (sw) para manejar las distintas situaciones del codigo
* */

/*POO: Se sigue usando la clase tarea para mostrar y usar los objetos de la misma.
La funcion VerDetallesDeTareas() utiliza uno de los objetos para mostrqar informacion.
* */


/* P. Funcional: Las funciones obtenerDia/mes/año son funciones puras ya que obtienen un dato
y devuelven el mismo dato.
VerDetallesDeTareas, verDificultad, verFecha toman los valores
y solo producen salidas  por lo que utilizarian un enfoque funcional
* */

import {Tarea} from "./Tarea";
import {leer, volverMenu} from "./aux";// Funciones para entrada del usuario y volver al menú
import {EditarTarea} from "./editarTarea";// Función para editar una tarea
//import {arregloTareas} from "./arregloTarea";


// Función para mostrar los detalles de una tarea específica
export function verDetallesDeTareas(tareas: Tarea): void {
    console.clear();

    console.log("Esta es la tarea que elegiste");
    console.log(`  ${tareas.titulo}`); // Muestra el título
    console.log(`  ${tareas.descripcion ? tareas.descripcion : 'Sin Datos'}`); // Muestra la descripción
    console.log(`  Estado:      ${tareas.estado}`); // Muestra el estado de la tarea.

    verDificultad(tareas);// Llama a la función para mostrar la dificultad de la tarea
    console.log(`  Fecha de Creacion:      ${obtenerDia(tareas.fechaCreacion)}/${obtenerMes(tareas.fechaCreacion)}/${obtenerAnio(tareas.fechaCreacion)}`);
    preguntarEditarOMenu(tareas); // Llama a la función para preguntar al usuario si desea editar la tarea o volver al menú

}


// Función para mostrar la dificultad de una tarea
export function verDificultad(tareas: Tarea) {
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
export function obtenerDia(fecha:Date){

    return String(fecha.getDate()).padStart(2, '0');
}

export function obtenerMes(fecha:Date){
    return String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0

}
export function obtenerAnio(fecha: Date) {
    return fecha.getFullYear();
}

/*.padStart(2, '0') asegura que el día tenga al menos 2 dígitos, añadiendo un 0 al inicio si es necesario.*/


// Función para preguntar al usuario si desea editar la tarea o volver al menú principal
export function preguntarEditarOMenu(tareas: Tarea) {

    console.log("Si deseas editarla, presione E, o presiona 0 para volver");
    let opcion: string = leer(">: ").toLowerCase();

    switch (opcion) {
        case 'e':
            EditarTarea(tareas);// Llama a la función para editar la tarea
            break;
        case '0':
            volverMenu("");// Llama a la función para volver al menú principal
            break;
        default:
            console.log("Opcion incorrecta!");
            leer("\nPresione enter para continuar...");// Mensaje de error si la opción ingresada no es válida
            verDetallesDeTareas(tareas);// Vuelve a mostrar los detalles de la tarea
            break;
    }

}