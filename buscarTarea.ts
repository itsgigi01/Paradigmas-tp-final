/* POO: El codigo trabaja con la clase Tarea y utilizando sus distintas
instancias de tareas existentes.
* */

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


import {leer, volverMenu} from "./aux"; // Funciones para entrada del usuario y volver al menú anterior
import {arregloTareas} from "./arregloTarea"; // Arreglo de tareas
import {Tarea} from "./Tarea";
import {preguntaPorVerDetalles} from "./verTareasOp"; // Función para preguntar por ver detalles de tareas

// Función para buscar una tarea por título
export function buscarTarea(): void {
    console.clear();
    console.log("Introduce el título de una tarea para buscarla");
    let palabraClave: string = leer(">: ").toLowerCase();
    const tareasEncontradas: Tarea[] = arregloTareas.filter((tarea: Tarea) =>
        tarea.titulo.toLowerCase().includes(palabraClave)
    );

    verBusqueda(tareasEncontradas, palabraClave)
}


// Función para mostrar el resultado de la búsqueda de tareas
export function verBusqueda(tareasEncontradas: Tarea[], palabraClave: String): void {
    switch (tareasEncontradas.length) {
        case 0:
            volverMenu("No hay tareas relacionadas con la busqueda"); // Si no se encuentran tareas, vuelve al menú anterior
            break;
        default:
            console.log("\nEstas son las tareas relacionadas: \n");
            // Muestra las tareas encontradas enumeradas con su título
            tareasEncontradas.map((tarea, index) => {
                console.log(`[${index + 1}] ${tarea.titulo}\n`);
            });

            preguntaPorVerDetalles(tareasEncontradas); // Pregunta al usuario si desea ver los detalles de alguna tarea encontrada
            break;

    }
}



