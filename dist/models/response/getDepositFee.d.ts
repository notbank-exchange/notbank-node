import { DepositFeeMessages } from "../enums/depositFeeMessages.js";
export interface DepositFee {
    FeeAmount: number;
    TicketAmount: number;
    message: DepositFeeMessages;
}
