import { Response } from 'node-fetch';
export interface FormDataRequest {
    url: string;
    formData: FormData;
    extraHeaders?: any;
}
export declare class FormDataRequester {
    static post<T1>(config: FormDataRequest): Promise<Response>;
    private static getHeaders;
}
