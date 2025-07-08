import { Bank } from "./bank"

export interface bankAccount {
  id:string
  country: string,
  bank: Bank,
  number:string
  kind:string
  currency:string
  agency?:string
  dv?:string
  province?:string
  pix_type?:string
}