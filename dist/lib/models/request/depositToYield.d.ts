import { YieldProduct } from "../enums/index.js";
export interface DepositToYieldRequest {
    amount: number;
    product_id: number;
    type: YieldProduct;
}
