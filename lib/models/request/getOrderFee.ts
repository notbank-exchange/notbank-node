import { MakerTaker } from "../common/makerTaker";
import { OrderTypeInt } from "../common/orderType";
import { TradeSide } from "../enums/tradeSide";

export interface GetOrderFeeRequest {
  AccountId: number; // Obligatorio: ID de la cuenta del usuario solicitante
  InstrumentId: number; // Obligatorio: ID del instrumento a ser negociado
  Quantity: number; // Obligatorio: Cantidad para la negociación
  Price: number; // Obligatorio: Precio de entrada para el comercio
  OrderType: OrderTypeInt; // Obligatorio: Tipo de orden (Market, Limit, etc.)
  MakerTaker: MakerTaker; // Obligatorio: Tipo de negociación
  Side: TradeSide; // Obligatorio: Lado del comercio (Buy, Sell, etc.)
}
