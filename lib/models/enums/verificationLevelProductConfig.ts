export interface VerificationLevelProductConfig {
  ProductId: number; // The ID of the product
  ProductName: string; // The name of the product
  AutoWithdrawThreshold: number; // The maximum withdraw amount which can be auto-accepted
  DailyDepositLimit: number; // Maximum daily deposit amount
  DailyDepositNotionalLimit: number; // Maximum daily notional deposit amount
  MonthlyDepositLimit: number; // Maximum monthly deposit amount
  MonthlyDepositNotionalLimit: number; // Maximum monthly notional deposit amount
  YearlyDepositLimit: number; // Maximum yearly deposit amount
  YearlyDepositNotionalLimit: number; // Maximum yearly notional deposit amount
  DailyWithdrawLimit: number; // Maximum daily withdraw amount
  DailyWithdrawNotionalLimit: number; // Maximum daily notional withdraw amount
  MonthlyWithdrawLimit: number; // Maximum monthly withdraw amount
  MonthlyWithdrawNotionalLimit: number; // Maximum monthly notional withdraw amount
  YearlyWithdrawLimit: number; // Maximum yearly withdraw amount
  YearlyWithdrawNotionalLimit: number; // Maximum yearly notional withdraw amount
  NotionalProductId: number; // The ID of the notional product
  OverLimitRejected: boolean; // Reject deposits and withdrawals that exceed limits
  WithdrawProcessingDelaySec: number; // Delay before a withdraw request is processed
  DepositTicketWorkflow: string; // The deposit workflow
  WithdrawTicketWorkflow: string; // The withdraw workflow
  RequireWhitelistedAddress: boolean; // Require whitelisted address for withdrawals
  AutoAcceptWhitelistedAddress: boolean; // Auto-accept withdrawals using whitelisted addresses
}
