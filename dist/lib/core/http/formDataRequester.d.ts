import { Response } from 'node-fetch';
export interface FormDataRequest<T1> {
    url: string;
    params?: T1;
    files: [string, File][];
    extraHeaders?: any;
}
export declare class FormDataRequester {
    #private;
    constructor();
    updateSessionToken(aptoken: string): void;
    post<T1>(config: FormDataRequest<T1>): Promise<Response>;
    private getRequestInit;
    getHeaders(extraHeaders?: any): any;
    getUrlWithSearchParams(endpoint: string, params?: any): string;
}
