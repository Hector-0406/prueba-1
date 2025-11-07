import {client, ArmaPost} from '../api/clients';

export const createPost = async (
        nombre: string,
        tipo: string,
        danio: string,
        especial: string,
        encantamiento: string,
        durabilidad: string,
        descripcion: string): Promise<ArmaPost> => {    
    const{data} = await client.post('',
        {nombre, tipo, danio, especial, encantamiento, durabilidad, descripcion}
    )
    return data;
}
