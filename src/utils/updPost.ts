import { actualizar, ArmaData } from "../api/getData";

export const updPost = async (_id: string, valores: Partial<ArmaData>): Promise<ArmaData> => {
    const{data} = await actualizar.patch(`/?_id=${_id}`, valores);
    return data as ArmaData;
}
