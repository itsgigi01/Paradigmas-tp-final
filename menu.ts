/* P. Estructurada: El diseño general del código sigue un enfoque estructurado,
con funciones que ejecutan tareas concretas de manera organizada.
Se utilizan funciones de y estructuras de control (ej: switch)
El SWITCH generalmente se usa cuando tenemos muchas mas opciones a elegir a
diferencia del IF*/


// Importación de funciones desde diferentes archivos
import {leer} from "./aux"; // Función para leer entrada del usuario
import {addTareas} from "./agregarTareas"; // Función para agregar tareas
import {opcionVerTareas} from "./verTareasOp";// Función para ver tareas
import {buscarTarea} from "./buscarTarea"; // Función para buscar una tarea


// Función principal que muestra el menú de tareas
export function menuTareas(): void {
    console.clear();
    console.log("¡Hola!");
    console.log("¿Qué deseas hacer?");
    console.log("  [1] Ver mis tareas.");
    console.log("  [2] Buscar una tarea.");
    console.log("  [3] Agregar una tarea.");
    console.log("  [0] Salir.");
    switchMenu(leer(" >: ")); // Llama a switchMenu para manejar la opción seleccionada
}

function switchMenu(opcion: string): void {
    switch (Number(opcion)) {
        case 1:// Opción para ver tareas
            opcionVerTareas();
            break;
        case 2:// Opción para buscar una tarea
            buscarTarea();
            break;
        case 3:// Opción para agregar una tarea
            addTareas();
            break;
        case 0:// Opción para salir del programa
            process.exit(0);
            break;
        default:// Opción por defecto si la entrada no es válida
            console.log("Opcion invalida. Presione una opcion valida del 0 al 3");
            switchMenu(leer(">: ")); // Vuelve a solicitar la opción válida al usuario

    }
}

