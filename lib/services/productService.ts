import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceClient } from "../core/serviceClient";
import { GetProductRequest } from "../models/request/getProduct";
import { GetProductsRequest } from "../models/request/getProducts";
import { GetVerificationLevelConfigRequest } from "../models/request/getVerificationLevelConfig";
import { GetProductResponse } from "../models/response/getProduct";
import { GetVerificationLevelConfigResponse } from "../models/response/getVerificationLevelConfig";
import { completeParams } from "../utils/completeParams";

export class ProductService {
  #serviceCore: ServiceClient;
  private readonly OMS_ID = 1;

  constructor(serviceCore: ServiceClient) {
    this.#serviceCore = serviceCore;
  }

  async getProduct(params: GetProductRequest): Promise<GetProductResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    const response = (await this.#serviceCore.request(
      Endpoint.GET_PRODUCT,
      RequestType.POST,
      paramsWithOMSId,
    )) as GetProductResponse;

    return response;
  }

  async getProducts(params: GetProductsRequest): Promise<GetProductResponse[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.#serviceCore.request(
      Endpoint.GET_PRODUCTS,
      RequestType.POST,
      paramsWithOMSId,
    )) as GetProductResponse[];
  }

  async getVerificationLevelConfig(
    params: GetVerificationLevelConfigRequest,
  ): Promise<GetVerificationLevelConfigResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    // Call the service endpoint
    const response = await this.#serviceCore.request(
      Endpoint.GET_VERIFICATION_LEVEL_CONFIG,
      RequestType.POST,
      paramsWithOMSId,
    );

    return response as GetVerificationLevelConfigResponse;
  }
}
