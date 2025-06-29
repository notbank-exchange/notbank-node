import { DepositFeeMessages } from "../enums/depositFeeMessages.js";
export interface GetDepositFeeResponse {
    FeeAmount: number;
    TicketAmount: number;
    message: DepositFeeMessages;
}
