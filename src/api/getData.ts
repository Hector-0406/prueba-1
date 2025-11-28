import axios from 'axios';

export const consultar = axios.create({
    baseURL: 'http://127.0.0.1:5000/consultarArma'
    //baseURL: 'https://n3dv4dhj-5000.usw3.devtunnels.ms/consultarArma'
});

export const actualizar = axios.create({
    baseURL: "http://127.0.0.1:5000/actualizarArma"
    //baseURL: 'https://n3dv4dhj-5000.usw3.devtunnels.ms/actualizarArma'
});

export const eliminar = axios.create({
    baseURL: "http://127.0.0.1:5000/eliminarArma"
    //baseURL:'https://n3dv4dhj-5000.usw3.devtunnels.ms/eliminarArma'
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