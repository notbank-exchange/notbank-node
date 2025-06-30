import { ServiceClient } from "../core/serviceClient.js";
import { GetProductRequest } from "../models/request/getProduct.js";
import { GetProductsRequest } from "../models/request/getProducts.js";
import { GetVerificationLevelConfigRequest } from "../models/request/getVerificationLevelConfig.js";
import { GetProductResponse } from "../models/response/getProduct.js";
import { GetVerificationLevelConfigResponse } from "../models/response/getVerificationLevelConfig.js";
export declare class ProductService {
    #private;
    private readonly OMS_ID;
    constructor(serviceCore: ServiceClient);
    getProduct(params: GetProductRequest): Promise<GetProductResponse>;
    getProducts(params: GetProductsRequest): Promise<GetProductResponse[]>;
    getVerificationLevelConfig(params: GetVerificationLevelConfigRequest): Promise<GetVerificationLevelConfigResponse>;
}
