
/* Programacion estructurada: AddTareas es secuencial y estructurado. Y
se utilizan estructuras de control (SWITCH) para manejar opciones de
entrada del usuario de manera secuencial
* */

/* POO: Se utiliza la clase `Tarea` y  se crea la informacion para objetos  del tipo `Tarea`
con atributos y métodos asociados.
 * */

import {leer, volverMenu} from "./aux"; // Funciones para entrada del usuario y volver al menú anterior
import {DificultadTareas, EstadoTareas, Tarea} from "./Tarea";
import {push} from "./arregloTarea";// Función para agregar una tarea al arreglo de tareas


// Función para solicitar y devolver el título de una tarea
function solicitarTitulo(): string {
    let titulo: string = leer("1. Ingresa el titulo: > ");
    return titulo;
}


// Función para solicitar y devolver la descripción de una tarea
export function solicitarDescripcion(): string {
    let descripcion: string = leer("2. Ingresa la descripcion: > ");
    return descripcion;
}


// Función para solicitar y devolver el estado de una tarea (pendiente o en curso)
export function solicitarEstado(): EstadoTareas {
    const estadoOP: string = leer("3. Ingresa el estado de la tarea: [P] Pendiente o [E] En curso: > ").toLowerCase();
    let estado: EstadoTareas;
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
export function solicitarDificultad(): DificultadTareas {
    const dificultadOP: string = leer("4. Ingresa la dificultad de la tarea: [F] Facil, [M] Medio, [D] Dificil : > ").toLowerCase();
    let Dificultad: DificultadTareas;
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
export function addTareas(): void {
    console.clear();
    const tareaNueva: Tarea = new Tarea(solicitarTitulo(), solicitarDescripcion(), solicitarEstado(), solicitarDificultad());
    push(tareaNueva);
    volverMenu("\n¡Datos guardados!\n");
}