// src/models/request/getL2Snapshot.ts
export interface GetL2SnapshotRequest {
  InstrumentId: number; // Required: ID of the instrument
  Depth: number; // Required: Maximum number of bids and asks
}
