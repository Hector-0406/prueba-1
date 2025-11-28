import {consultar, ArmaData} from '../api/getData';

export const getPost = async (): Promise<ArmaData> => {
    const{data} = await consultar.get('');
    return data as ArmaData;
}