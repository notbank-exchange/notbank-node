import { InstrumentVerificationLevelConfig } from "../enums/instrumentVerificationLevelConfig";

export interface GetInstrumentVerificationLevelConfigResponse {
  Level: number; // The verification level number
  LevelName: string | null; // The name of the verification level
  OMSId: number; // The ID of the OMS
  Instruments: InstrumentVerificationLevelConfig[]; // Array of instrument-specific configs
}
