import { YieldProduct } from "../enums"

export interface WithdrawFromYieldRequest {
  amount: number
  product_id: string
  type: YieldProduct
}