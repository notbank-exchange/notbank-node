import { VerificationLevelProductConfig } from "../enums/verificationLevelProductConfig";

export interface GetVerificationLevelConfigResponse {
  Level: number; // The verification level number
  LevelName: string | null; // The name of the verification level
  OMSId: number; // The ID of the OMS
  Products: VerificationLevelProductConfig[]; // Array of product-specific configs
}
