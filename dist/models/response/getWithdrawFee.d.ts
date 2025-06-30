import { WithdrawFeeMessages } from "../enums/withdrawFeeMessages.js";
export interface GetWithdrawFeeResponse {
    FeeAmount: number;
    TicketAmount: number;
    message: WithdrawFeeMessages;
}
