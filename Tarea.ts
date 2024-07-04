/* POO: Define una clase Tarea que representa una tarea
con atributos como título, descripción, estado, dificultad y
fecha de creación. Los atributos son privados y se accede por medio de
metodos (get y setters), lo que controla como se modifican esos datos
*/


// Definición de tipos personalizados para EstadoTareas y DificultadTareas
export type EstadoTareas = 'pendiente' | 'en curso' | 'terminada' | 'cancelada';
export type DificultadTareas = 'Facil' | 'Medio' | 'Dificil';

//Definimos la clase tarea
export class Tarea {

    private _titulo: string;
    private _descripcion: string | null;
    private _estado: EstadoTareas;
    private _dificultad: DificultadTareas;
    private _fechaCreacion: Date;

    // Constructor de la clase Tarea
    constructor(titulo: string, descripcion: string | null, estado: EstadoTareas, dificultad: DificultadTareas) {
        this._titulo = titulo;
        this._descripcion = descripcion || null;
        this._estado = this.controlarEstados(estado);
        this._dificultad = this.controlarDificultadad(dificultad);
        this._fechaCreacion = new Date();

    }

    /* El método .trim() en JavaScript se utiliza para eliminar los espacios en blanco del principio y del final de
     una cadena. Esto incluye espacios, tabulaciones, y saltos de línea.
     Se utiliza .trim() antes de proceder a actualizar los atributos */

    editarTareas(descripcionEditada: string, estadoEditada: EstadoTareas, dificultadEditada: DificultadTareas): void {
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
    }


    //validadores de estado y dificultadad

    /*['pendiente', 'en curso', 'terminada', 'cancelada'].includes(estado):
    Este método verifica si estado está incluido en la lista de estados permitidos. El método includes devuelve
     true si estado  se encuentra y false en caso contrario y devuelve 'pendiente' en ese caso.*/

    // Método para controlar el estado de la tarea
    controlarEstados(estado: EstadoTareas): EstadoTareas {
        return ['pendiente', 'en curso', 'terminada', 'cancelada'].includes(estado) ? estado : "pendiente";

    }

    // Método para controlar la dificultad de la tarea
    controlarDificultadad(dificultad: DificultadTareas): DificultadTareas {
        return ['Facil', 'Medio', 'Dificil'].includes(dificultad) ? dificultad : "Facil";
    }


    //Metodos de acceso  para el titulo
    get titulo(): string {
        return this._titulo;
    }

    set titulo(titulo: string) {
        this._titulo = titulo;
    }



    //Metodos de acceso  para el descripcion
    get descripcion(): string | null {
        return this._descripcion;
    }
    set descripcion(descripcion: string | null) {
        this._descripcion = descripcion;
    }


    //Metodos de acceso  para el estado
    get estado(): EstadoTareas {
        return this._estado;
    }

    set estado(estado: EstadoTareas) {
        this._estado = estado;
    }


    //Metodos de acceso  para la dificultad
    get dificultad(): DificultadTareas {
        return this._dificultad;
    }

    set dificultad(dificultad: DificultadTareas) {
        this._dificultad = dificultad;
    }


    //Metodos de acceso  para la fecha
    get fechaCreacion(): Date {
        return this._fechaCreacion;
    }

    set fechaCreacion(fechaCreacion: Date) {
        this._fechaCreacion = fechaCreacion;
    }

}







