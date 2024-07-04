"use strict";
/* POO: Define una clase Tarea que representa una tarea
con atributos como título, descripción, estado, dificultad y
fecha de creación. Los atributos son privados y se accede por medio de
metodos (get y setters), lo que controla como se modifican esos datos
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
//Definimos la clase tarea
var Tarea = /** @class */ (function () {
    // Constructor de la clase Tarea
    function Tarea(titulo, descripcion, estado, dificultad) {
        this._titulo = titulo;
        this._descripcion = descripcion || null;
        this._estado = this.controlarEstados(estado);
        this._dificultad = this.controlarDificultadad(dificultad);
        this._fechaCreacion = new Date();
    }
    /* El método .trim() en JavaScript se utiliza para eliminar los espacios en blanco del principio y del final de
     una cadena. Esto incluye espacios, tabulaciones, y saltos de línea.
     Se utiliza .trim() antes de proceder a actualizar los atributos */
    Tarea.prototype.editarTareas = function (descripcionEditada, estadoEditada, dificultadEditada) {
        // Validación y actualización de la descripción si no está vacía
        if (descripcionEditada.trim() !== '') {
            this.descripcion = descripcionEditada;
        }
        // Validación y actualización del estado
        if (estadoEditada.trim() !== '') {
            this.estado = this.controlarEstados(estadoEditada);
        }
        // Validación y actualización de la dificultad
        if (dificultadEditada.trim() !== '') {
            this.dificultad = this.controlarDificultadad(dificultadEditada);
        }
    };
    //validadores de estado y dificultadad
    /*['pendiente', 'en curso', 'terminada', 'cancelada'].includes(estado):
    Este método verifica si estado está incluido en la lista de estados permitidos. El método includes devuelve
     true si estado  se encuentra y false en caso contrario y devuelve 'pendiente' en ese caso.*/
    // Método para controlar el estado de la tarea
    Tarea.prototype.controlarEstados = function (estado) {
        return ['pendiente', 'en curso', 'terminada', 'cancelada'].includes(estado) ? estado : "pendiente";
    };
    // Método para controlar la dificultad de la tarea
    Tarea.prototype.controlarDificultadad = function (dificultad) {
        return ['Facil', 'Medio', 'Dificil'].includes(dificultad) ? dificultad : "Facil";
    };
    Object.defineProperty(Tarea.prototype, "titulo", {
        //Metodos de acceso  para el titulo
        get: function () {
            return this._titulo;
        },
        set: function (titulo) {
            this._titulo = titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "descripcion", {
        //Metodos de acceso  para el descripcion
        get: function () {
            return this._descripcion;
        },
        set: function (descripcion) {
            this._descripcion = descripcion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "estado", {
        //Metodos de acceso  para el estado
        get: function () {
            return this._estado;
        },
        set: function (estado) {
            this._estado = estado;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "dificultad", {
        //Metodos de acceso  para la dificultad
        get: function () {
            return this._dificultad;
        },
        set: function (dificultad) {
            this._dificultad = dificultad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tarea.prototype, "fechaCreacion", {
        //Metodos de acceso  para la fecha
        get: function () {
            return this._fechaCreacion;
        },
        set: function (fechaCreacion) {
            this._fechaCreacion = fechaCreacion;
        },
        enumerable: false,
        configurable: true
    });
    return Tarea;
}());
exports.Tarea = Tarea;
