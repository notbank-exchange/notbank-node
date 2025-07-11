export interface OMSDepositFee {
  OMSId: number; // ID of the OMS
  AccountId: number; // ID of the account (0 = applies to any account)
  AccountProviderId: number; // ID of the account provider (0 = applies to any provider)
  FeeId: number; // ID of the specific deposit fee
  FeeAmt: number; // Standard deposit fee amount
  FeeCalcType: "Percentage" | "Flat"; // Fee calculation type
  IsActive: boolean; // Indicates if the fee is active
  ProductId: number; // ID of the product
  MinimalFeeAmt: number; // Minimum deposit fee amount (future provision)
  MinimalFeeCalcType: "Percentage" | "Flat"; // Minimum fee calculation type (future provision)
}
