import { OrderTypeStr } from "../common";

export interface AccountFee {
  FeeId: number;
  OMSId: number;
  FeeTier: number;
  AccountId: number;
  FeeAmt: number;
  FeeCalcType: FeeCalcType;
  FeeType: FeeType;
  LadderThreshold: number;
  LadderSeconds: number;
  IsActive: boolean;
  InstrumentId: number;
  OrderType: OrderTypeStr;
  PeggedProductId: number;
}

export enum FeeCalcType {
  Flat = "Flat",
  Percentage = "Percentage",
}

export enum FeeType {
  Flat = "Flat",
  MakerFee = "MakerFee",
  TakerFee = "TakerFee",
  PeggedProductFee = "PeggedProductFee",
  AffiliateFee = "AffiliateFee",
}
