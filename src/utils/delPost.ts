import {eliminar, ArmaData} from '../api/getData';

export const delPost = async (_id: string): Promise<ArmaData> => {
    const{data} = await eliminar.delete(`/?_id=${_id}`);
    return data as ArmaData;
}