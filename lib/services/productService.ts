import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { GetProductRequest } from "../models/request/getProduct";
import { GetProductsRequest } from "../models/request/getProducts";
import { GetVerificationLevelConfigRequest } from "../models/request/getVerificationLevelConfig";
import { Product } from "../models/response/product";
import { VerificationLevelConfig } from "../models/response/getVerificationLevelConfig";
import { completeParams } from "../utils/completeParams";
import { NotbankError } from "../models/notbankError";

export class ProductService {
  connection: ServiceConnection;
  private productCache: { [key: string]: Product }
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
    this.productCache = {}
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
  async getProducts(params: GetProductsRequest = {}): Promise<Product[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_PRODUCTS,
      RequestType.POST,
      paramsWithOMSId
    )
  }


  async getProductBySymbol(
    params: { symbol: string }
  ): Promise<Product> {
    if (!(params.symbol in this.productCache)) {
      var products = await this.getProducts();
      products.map(product => this.productCache[product.Product] = product)
    }
    if (params.symbol in this.productCache) {
      return Promise.resolve(this.productCache[params.symbol]);
    } else {
      throw new NotbankError("no product found for symbol " + params.symbol, -1)
    }
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
