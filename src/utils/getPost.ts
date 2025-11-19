import {consulta, ArmaData} from '../api/getData';

export const getPost = async (): Promise<ArmaData> => {
    const{data} = await consulta.get('');
    return data as ArmaData;
}