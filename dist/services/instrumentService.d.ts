import { ServiceClient } from "../core/serviceClient.js";
import { GetInstrumentRequest } from "../models/request/getInstrument.js";
import { GetInstrumentsRequest } from "../models/request/getInstruments.js";
import { GetInstrumentVerificationLevelConfigRequest } from "../models/request/getInstrumentVerificationLevelConfig.js";
import { GetInstrumentVerificationLevelConfigResponse } from "../models/response/getInstrumentVerificationLevelConfig.js";
import { InstrumentResponse } from "../models/response/instrument.js";
export declare class InstrumentService {
    #private;
    private readonly OMS_ID;
    constructor(serviceCore: ServiceClient);
    getInstruments(params: GetInstrumentsRequest): Promise<InstrumentResponse[]>;
    getInstrument(params: GetInstrumentRequest): Promise<InstrumentResponse>;
    getInstrumentVerificationLevelConfigs(params: GetInstrumentVerificationLevelConfigRequest): Promise<GetInstrumentVerificationLevelConfigResponse[]>;
}
