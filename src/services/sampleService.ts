import Axios, { AxiosResponse } from "axios";
import { Endpoints } from '../constants/endpoints';

export const fetchSampleData = <T>(
): Promise<AxiosResponse<T>> => {
    return Axios.get<T, AxiosResponse<T>>(
        Endpoints.sampleJSON,
    );
};


