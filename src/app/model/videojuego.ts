export class Videojuego {
    id: number;
    nombre: string;
    genero: string;
    plataforma: string;
    fechaLanzamiento: Date;
    empresaId: number;

    constructor(
        id: number,
        nombre: string,
        genero: string,
        plataforma: string,
        fechaLanzamiento: Date,
        empresaId: number
    ) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.plataforma = plataforma;
        this.fechaLanzamiento = fechaLanzamiento;
        this.empresaId = empresaId;
    }
}