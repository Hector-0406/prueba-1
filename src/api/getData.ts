import axios from 'axios';

export const consulta = axios.create({
    baseURL: 'http://10.3.18.22:5000/consultarArma'
});

export const actualizar = axios.create({
    baseURL: "http://10.3.18.22:5000/actualizarArma"
});

export interface ArmaData {
    _id: string,
    nombre: string,
    tipo: string,
    danio: string,
    especial: string,
    encantamiento: string,
    durabilidad: string,
    descripcion: string
}