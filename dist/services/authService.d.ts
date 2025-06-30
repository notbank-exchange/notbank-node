import { ServiceClient } from "../core/serviceClient.js";
import { WebAuthenticateUserRequest } from "../models/request/webAuthenticateUser.js";
import { WebAuthenticateUserResponse } from "../models/response/webAuthenticateUser.js";
export declare class AuthService {
    #private;
    constructor(serviceCore: ServiceClient);
    /**
     * https://apidoc.notbank.exchange/?http#webauthenticateuser
     */
    webAuthenticateUser(params: WebAuthenticateUserRequest): Promise<WebAuthenticateUserResponse>;
    /**
     * https://apidoc.notbank.exchange/?http#logout
     */
    logOut(): Promise<void>;
}
