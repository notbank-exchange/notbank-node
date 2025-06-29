export interface SubscribeLevel2Request {
  InstrumentId?: number; // El ID del instrumento
  Symbol?: string; // El símbolo del instrumento (por ejemplo, "BTCUSD")
  Depth: number; // Profundidad de mercado (ej. 10)
}
