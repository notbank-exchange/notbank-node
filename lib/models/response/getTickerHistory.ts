export interface TickerSummary {
  EndDateTime: number; // Fecha/hora de cierre en POSIX
  High: number; // Precio máximo
  Low: number; // Precio mínimo
  Open: number; // Precio de apertura
  Close: number; // Precio de cierre
  Volume: number; // Volumen total
  Bid: number; // Mejor precio de compra
  Ask: number; // Mejor precio de venta
  InstrumentId: number; // ID del Instrumento
  BeginDateTime: number; // Fecha/hora de inicio en POSIX
}
