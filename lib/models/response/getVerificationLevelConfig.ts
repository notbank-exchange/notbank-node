import { ProductLimits } from "../enums/verificationLevelProductConfig";

export interface VerificationLevelConfig {
  Level: number; // The verification level number
  LevelName: string | null; // The name of the verification level
  OMSId: number; // The ID of the OMS
  Products: ProductLimits[]; // Array of product-specific configs
}
