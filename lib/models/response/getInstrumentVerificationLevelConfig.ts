import { InstrumentLimits } from "./instrumentVerificationLevelConfig";

export interface InstrumentVerificationLevelConfig {
  Level: number; // The verification level number
  LevelName: string | null; // The name of the verification level
  OMSId: number; // The ID of the OMS
  Instruments: InstrumentLimits[]; // Array of instrument-specific configs
}
