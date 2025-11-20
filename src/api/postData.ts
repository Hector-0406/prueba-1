import axios from 'axios';

export const publicar = axios.create({
    baseURL: 'https://n3dv4dhj-5000.usw3.devtunnels.ms/registrarArma'
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
