import { Empleado } from "./Persona";

export interface Evento {
    empleadoId: number;
    
    id: number;
    nombre: string;
    fecha: string;
    hora: string;
    descripcion: string;
    categoria: 'log' | 'warn' | 'error';
    creacion: Date;
}