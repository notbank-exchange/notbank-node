export declare class NbResponseHandler {
    #private;
    static handle<T>(response: Response, paged: boolean): Promise<T>;
}
