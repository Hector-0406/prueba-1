import axios from 'axios';

export const consulta = axios.create({
    baseURL: 'http://100.113.115.21:5000/consultarArma'
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