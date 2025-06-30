export interface GetTickerHistoryRequest {
  InstrumentId: number; // ID del Instrumento
  Interval: number; // Intervalos entre ticks (en segundos)
  FromDate: string; // Fecha/hora inicial en formato DateTime
  ToDate: string; // Fecha/hora final en formato DateTime
}
