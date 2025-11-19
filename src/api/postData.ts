import axios from 'axios';

export const publicar = axios.create({
    baseURL: 'http://100.113.115.21:5000/registrarArma'
});

export interface ArmaPost {
    nombre: string,
    tipo: string,
    danio: string,
    especial: string,
    encantamiento: string,
    durabilidad: string,
    descripcion: string
}
