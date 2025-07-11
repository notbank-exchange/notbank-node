export interface AccountSettlementPositions {
  OMSId: number;
  AccountId: number;
  AccountName: string;
  CreditTier: number;
  TradingHalted: boolean;
  BaseProductId: number;
  BaseProductSymbol: string;
  BaseProductAmountFiat: number;
  BaseProductAmountCrypto: number;
  BaseProductNetOwedAmount: number;
  BaseProductNetOwedLimit: number;
  BaseProductNetOwedRemaining: number;
  BaseProductNetOwedAmountFiat: number;
  BaseProductNetOwedAmountCrypto: number;
  AccountSettlementPositions: AccountSettlementPosition[];
}

export interface AccountSettlementPosition {
  OMSId: number;
  AccountId: number;
  ProductId: number;
  ProductSymbol: string;
  ProductType: string;
  Position: number;
  BaseProductId: number;
  BaseProductSymbol: string | null;
  BaseProductNotionalAmount: number;
  CreditLimit: number;
  CreditUtilization: number;
  CreditRemaining: number;
  CurrentNotionalRate: number;
  CurrentBaseProductNotionalAmount: number;
}
