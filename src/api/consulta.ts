import axios from 'axios';

export const consulta = axios.create({
    baseURL: 'http://100.113.115.21:5000/consultarArma'
});

export interface ArmaData {
    _id?: string;
    nombre?: String,
    tipo?: String,
    danio?: String,
    especial?: String,
    encantamiento?: String,
    durabilidad?: String,
    descripcion?: String
}