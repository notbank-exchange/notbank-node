import { YieldProduct } from "../enums"

export interface DepositToYieldRequest {
  amount: number
  product_id: number
  type: YieldProduct
}