import axios from 'axios';

export const eliminar = axios.create({
    baseURL: "http://10.3.18.22:5000/eliminarArma"
});

export interface ArmaDel {
    _id: string
}
