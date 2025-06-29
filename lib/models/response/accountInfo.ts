import { AccountType } from "../enums/accountType";
import { FeeProductType } from "../enums/feeProductType";
import { RiskType } from "../enums/riskType";

export interface AccountInfo {
  OMSID: number;
  AccountId: number;
  AccountName: string;
  AccountHandle?: string;
  FirmId?: string;
  FirmName?: string;
  AccountType: AccountType;
  FeeGroupId: number;
  ParentID: number;
  RiskType: RiskType;
  VerificationLevel: number;
  VerificationLevelName?: string;
  CreditTier: number;
  FeeProductType: FeeProductType;
  FeeProduct: number;
  RefererId: number;
  LoyaltyProductId: number;
  LoyaltyEnabled: boolean;
  PriceTier: number;
  Frozen: boolean;
}
