/*Aux.TS ayuda para estar llamando constantemente las mismas funciones y evitar estar repitiendo codigo*/


import {menuTareas} from "./menu";


// Importación de la función leer desde 'prompt-sync'
export const leer = require('prompt-sync')();


// Función para volver al menú principal
export function volverMenu(texto: string): void {

    // Muestra el texto recibido y espera a que el usuario presione enter para continuar
    leer(`${texto}\nPresione enter para continuar...`);


    // Llama a la función menuTareas para volver al menú principal
    menuTareas();
}

