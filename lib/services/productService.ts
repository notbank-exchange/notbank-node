import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { GetProductRequest } from "../models/request/getProduct";
import { GetProductsRequest } from "../models/request/getProducts";
import { GetVerificationLevelConfigRequest } from "../models/request/getVerificationLevelConfig";
import { Product } from "../models/response/product";
import { VerificationLevelConfig } from "../models/response/getVerificationLevelConfig";
import { completeParams } from "../utils/completeParams";

export class ProductService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#getproduct
   */
  getProduct(params: GetProductRequest): Promise<Product> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_PRODUCT,
      RequestType.POST,
      paramsWithOMSId
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getproducts
   */
  async getProducts(params: GetProductsRequest): Promise<Product[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_PRODUCTS,
      RequestType.POST,
      paramsWithOMSId
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getverificationlevelconfig
   */
  async getVerificationLevelConfig(
    params: GetVerificationLevelConfigRequest
  ): Promise<VerificationLevelConfig> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return await this.connection.apRequest(
      Endpoint.GET_VERIFICATION_LEVEL_CONFIG,
      RequestType.POST,
      paramsWithOMSId
    );
  }
}
