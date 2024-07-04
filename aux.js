"use strict";
/*Aux.TS ayuda para estar llamando constantemente las mismas funciones y evitar estar repitiendo codigo*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.leer = void 0;
exports.volverMenu = volverMenu;
var menu_1 = require("./menu");
// Importación de la función leer desde 'prompt-sync'
exports.leer = require('prompt-sync')();
// Función para volver al menú principal
function volverMenu(texto) {
    // Muestra el texto recibido y espera a que el usuario presione enter para continuar
    (0, exports.leer)("".concat(texto, "\nPresione enter para continuar..."));
    // Llama a la función menuTareas para volver al menú principal
    (0, menu_1.menuTareas)();
}
