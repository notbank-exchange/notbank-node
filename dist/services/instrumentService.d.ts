import { ServiceConnection } from "../core/serviceClient.js";
import { GetInstrumentRequest } from "../models/request/getInstrument.js";
import { GetInstrumentsRequest } from "../models/request/getInstruments.js";
import { GetInstrumentVerificationLevelConfigRequest } from "../models/request/getInstrumentVerificationLevelConfig.js";
import { InstrumentVerificationLevelConfig } from "../models/response/getInstrumentVerificationLevelConfig.js";
import { Instrument } from "../models/response/instrument.js";
export declare class InstrumentService {
    connection: ServiceConnection;
    private readonly OMS_ID;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getinstruments
     */
    getInstruments(params?: GetInstrumentsRequest): Promise<Instrument[]>;
    /**
     * https://apidoc.notbank.exchange/#getinstrument
     */
    getInstrument(params: GetInstrumentRequest): Promise<Instrument>;
    /**
     * https://apidoc.notbank.exchange/#getinstrumentverificationlevelconfig
     */
    getInstrumentVerificationLevelConfigs(params: GetInstrumentVerificationLevelConfigRequest): Promise<InstrumentVerificationLevelConfig[]>;
}
