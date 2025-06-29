import { TransactionReferenceTypes } from "../enums/transactionReferenceTypes";
import { TransactionTypes } from "../enums/transactionTypes";

export interface GetAccountTransactionsRequest {
  AccountId?: number;
  Depth?: number;
  ProductId?: number;
  TransactionId?: number;
  ReferenceId?: number;
  TransactionTypes?: TransactionTypes[]; // <-- Enum array
  TransactionReferenceTypes?: TransactionReferenceTypes[]; // <-- Enum array
  StartTimestamp?: number;
  EndTimeStamp?: number;
}
