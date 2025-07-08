import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceClient } from "../core/serviceClient";
import { completeParams } from "../utils/completeParams";

// *************************************REQUEST*************************************
import { GetUserAccountsRequest } from "../models/request/getUserAccounts";
import { GetUserDevicesRequest } from "../models/request/getUserDevices";
import { GetUserInfoRequest } from "../models/request/getUserInfo";
import { GetUserPermissionsRequest } from "../models/request/getUserPermissions";

// *************************************RESPONSE*************************************
import { GetUserDevicesResponse } from "../models/response/getUserDevices";
import { GetUserAccountsResponse } from "../models/response/getUserAccounts";
import { GetUserInfoResponse } from "../models/response/getUserInfo";
import { GetUserPermissionsResponse } from "../models/response/getUserPermissions";

export class UserService {
  #serviceCore: ServiceClient;
  private readonly OMS_ID = 1;

  constructor(serviceCore: ServiceClient) {
    this.#serviceCore = serviceCore;
  }

  public async getUserAccounts(
    request: GetUserAccountsRequest
  ): Promise<GetUserAccountsResponse> {
    // Validate optional fields
    if (request.UserId && typeof request.UserId !== "number")
      throw new Error("UserId must be a number.");

    const params = completeParams(request, this.OMS_ID);

    // Make the HTTP request
    const response: GetUserAccountsResponse = (await this.#serviceCore.apRequest(
      Endpoint.GET_USER_ACCOUNTS,
      RequestType.POST,
      params
    )) as GetUserAccountsResponse;

    return response;
  }

  public async getUserDevices(
    request: GetUserDevicesRequest
  ): Promise<GetUserDevicesResponse> {
    // Validate optional fields
    if (request.UserId && typeof request.UserId !== "number")
      throw new Error("UserId must be a number.");

    // Make the HTTP request
    const response: GetUserDevicesResponse = (await this.#serviceCore.apRequest(
      Endpoint.GET_USER_DEVICES,
      RequestType.POST,
      request
    )) as GetUserDevicesResponse;

    return response;
  }

  public async getUserInfo(
    request: GetUserInfoRequest
  ): Promise<GetUserInfoResponse> {
    // Validate optional fields
    if (request.UserId && typeof request.UserId !== "number")
      throw new Error("UserId must be a number.");

    // Make the HTTP request
    const response: GetUserInfoResponse = (await this.#serviceCore.apRequest(
      Endpoint.GET_USER_INFO,
      RequestType.POST,
      request
    )) as GetUserInfoResponse;

    return response;
  }

  public async getUserPermissions(
    request: GetUserPermissionsRequest
  ): Promise<GetUserPermissionsResponse> {
    if (request.UserId == null || typeof request.UserId !== "number")
      throw new Error("UserId is required and must be a number.");

    const response: GetUserPermissionsResponse =
      (await this.#serviceCore.apRequest(
        Endpoint.GET_USER_PERMISSIONS,
        RequestType.POST,
        request
      )) as GetUserPermissionsResponse;

    return response;
  }
}
