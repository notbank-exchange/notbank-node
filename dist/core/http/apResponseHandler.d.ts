import { Response } from 'node-fetch';
export declare class ApResponseHandler {
    #private;
    static handle<T>(response: Response): Promise<T>;
}
