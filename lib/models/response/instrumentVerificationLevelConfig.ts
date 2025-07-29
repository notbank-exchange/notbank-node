export interface InstrumentLimits {
  VerificationLevel: number; // The verification level number
  VerificationLevelName: string | null; // The name of the verification level
  OMSId: number; // The ID of the OMS
  InstrumentId: number; // The ID of the instrument
  InstrumentName: string; // The name/symbol of the instrument
  OrderBuyLimit: number; // Maximum amount allowed for every buy order
  OrderSellLimit: number; // Maximum amount allowed for every sell order
  DailyBuyLimit: number; // Daily maximum amount allowed for buy orders
  DailySellLimit: number; // Daily maximum amount allowed for sell orders
  MonthlyBuyLimit: number; // Monthly maximum amount allowed for buy orders
  MonthlySellLimit: number; // Monthly maximum amount allowed for sell orders
  NotionalProductId: number; // ID of the product set as the notional product
  OrderNotionalLimit: number; // Maximum notional amount allowed per order
  DailyNotionalLimit: number; // Daily maximum notional amount allowed
  MonthlyNotionalLimit: number; // Monthly maximum notional amount allowed
  YearlyNotionalLimit: number; // Yearly maximum notional amount allowed
}
