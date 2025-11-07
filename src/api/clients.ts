import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://100.113.115.21:5000/registrarArma'
});

export interface ArmaPost {
    nombre: String,
    tipo: String,
    danio: String,
    especial: String,
    encantamiento: String,
    durabilidad: String,
    descripcion: String
}
