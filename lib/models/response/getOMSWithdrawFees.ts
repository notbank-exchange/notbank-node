export interface GetOMSWithdrawFeesResponse {
  OMSId: number; // ID of the OMS
  AccountId: number; // ID of the account
  AccountProviderId: number; // ID of the account provider
  FeeId: number; // ID of the specific withdraw fee
  FeeAmt: number; // Standard withdraw fee amount
  FeeCalcType: "Percentage" | "Flat"; // Fee calculation type
  IsActive: boolean; // Indicates if the fee is active
  ProductId: number; // ID of the product
  MinimalFeeAmt: number; // Minimum withdraw fee amount
  MinimalFeeCalcType: "Percentage" | "Flat"; // Minimum fee calculation type
}
