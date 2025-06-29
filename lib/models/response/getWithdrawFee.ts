import { WithdrawFeeMessages } from "../enums/withdrawFeeMessages";

export interface GetWithdrawFeeResponse {
  FeeAmount: number; // Estimación de la tarifa de retiro.
  TicketAmount: number; // Monto del producto a retirar.
  message: WithdrawFeeMessages; // Mensaje de estado del cálculo.
}
