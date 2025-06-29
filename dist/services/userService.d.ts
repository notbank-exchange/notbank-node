import { ServiceClient } from "../core/serviceClient.js";
import { GetUserAccountsRequest } from "../models/request/getUserAccounts.js";
import { GetUserDevicesRequest } from "../models/request/getUserDevices.js";
import { GetUserInfoRequest } from "../models/request/getUserInfo.js";
import { GetUserPermissionsRequest } from "../models/request/getUserPermissions.js";
import { GetUserDevicesResponse } from "../models/response/getUserDevices.js";
import { GetUserAccountsResponse } from "../models/response/getUserAccounts.js";
import { GetUserInfoResponse } from "../models/response/getUserInfo.js";
import { GetUserPermissionsResponse } from "../models/response/getUserPermissions.js";
export declare class UserService {
    #private;
    private readonly OMS_ID;
    constructor(serviceCore: ServiceClient);
    getUserAccounts(request: GetUserAccountsRequest): Promise<GetUserAccountsResponse>;
    getUserDevices(request: GetUserDevicesRequest): Promise<GetUserDevicesResponse>;
    getUserInfo(request: GetUserInfoRequest): Promise<GetUserInfoResponse>;
    getUserPermissions(request: GetUserPermissionsRequest): Promise<GetUserPermissionsResponse>;
}
