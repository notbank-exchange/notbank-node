import { VerificationLevelProductConfig } from "../enums/verificationLevelProductConfig.js";
export interface GetVerificationLevelConfigResponse {
    Level: number;
    LevelName: string | null;
    OMSId: number;
    Products: VerificationLevelProductConfig[];
}
