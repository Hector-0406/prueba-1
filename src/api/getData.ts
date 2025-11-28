import axios from 'axios';

export const consultar = axios.create({
    baseURL: 'http://127.0.0.1:5000/consultarArma'
});

export const actualizar = axios.create({
    baseURL: "http://127.0.0.1:5000/actualizarArma"
});

export const eliminar = axios.create({
    baseURL: "http://127.0.0.1:5000/eliminarArma"
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