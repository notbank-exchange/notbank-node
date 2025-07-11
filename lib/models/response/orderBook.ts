export interface OrderBookRaw {
  timestamp: number;
  bids: number[][];
  asks: number[][];
}

export interface Level {
  quantity: number
  price: number
}

export interface OrderBook {
  timestamp: number;
  bids: Level[];
  asks: Level[];
}

export function orderbookFromRaw(raw: OrderBookRaw): OrderBook {
  return {
    timestamp: raw.timestamp,
    bids: raw.bids.map(level => { return { quantity: level[0], price: level[1] } }),
    asks: raw.asks.map(level => { return { quantity: level[0], price: level[1] } })
  }
}