import {eliminar, ArmaDel} from '../api/delData';

export const delPost = async (_id: string): Promise<ArmaDel> => {
    const{data} = await eliminar.delete(`/?_id=${_id}`);
    return data as ArmaDel;
}