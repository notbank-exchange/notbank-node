import { DepositFeeMessages } from "../enums/depositFeeMessages";

export interface GetDepositFeeResponse {
  FeeAmount: number; // Monto estimado de la tarifa del depósito.
  TicketAmount: number; // Monto del producto que se va a depositar.
  message: DepositFeeMessages; // Mensaje describiendo el resultado de la solicitud.
}
