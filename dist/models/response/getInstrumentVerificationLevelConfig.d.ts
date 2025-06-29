import { InstrumentVerificationLevelConfig } from "../enums/instrumentVerificationLevelConfig.js";
export interface GetInstrumentVerificationLevelConfigResponse {
    Level: number;
    LevelName: string | null;
    OMSId: number;
    Instruments: InstrumentVerificationLevelConfig[];
}
