import {consulta, ArmaData} from '../api/consulta';

export const getPost = async (): Promise<ArmaData> => {
    const{data} = await consulta.get('');
    return data as ArmaData;
}