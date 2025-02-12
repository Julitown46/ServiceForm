import { Empleado } from "./Persona";

export interface Evento {
    empleadoId: number;
    
    id: number;
    nombre: string;
    fecha: Date;
    descripcion: string;
    categoria: 'log' | 'warn' | 'error';
}