import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://127.0.0.1:5000/registarArma'
});

export interface ArmaData {
    nombre: String,
    tipo: String,
    danio: String,
    especial: String,
    encantamiento: String,
    durabilidad: String,
    descripcion: String
}
