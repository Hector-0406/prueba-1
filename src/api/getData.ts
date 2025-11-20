import axios from 'axios';

export const consulta = axios.create({
    baseURL: 'https://n3dv4dhj-5000.usw3.devtunnels.ms/consultarArma'
});

export interface ArmaData {
    nombre: string,
    tipo: string,
    danio: string,
    especial: string,
    encantamiento: string,
    durabilidad: string,
    descripcion: string
}