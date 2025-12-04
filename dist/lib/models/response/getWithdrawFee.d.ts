import { WithdrawFeeMessages } from "../enums/withdrawFeeMessages.js";
export interface WithdrawFee {
    FeeAmount: number;
    TicketAmount: number;
    message: WithdrawFeeMessages;
}
