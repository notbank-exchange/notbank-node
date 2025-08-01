import { ProductLimits } from "../enums/verificationLevelProductConfig.js";
export interface VerificationLevelConfig {
    Level: number;
    LevelName: string | null;
    OMSId: number;
    Products: ProductLimits[];
}
