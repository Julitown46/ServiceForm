export class Empresa {
    id: number;
    nombre: string;
    latitud: number;
    longitud: number;
    fundacion: Date;

    constructor(
        id: number,
        nombre: string,
        latitud: number,
        longitud: number,
        fundacion: Date
    ) {
        this.id = id;
        this.nombre = nombre;
        this.latitud = latitud;
        this.longitud = longitud;
        this.fundacion = fundacion;
    }
}