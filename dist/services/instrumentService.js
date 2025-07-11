var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
import { completeParams } from "../utils/completeParams.js";
export class InstrumentService {
    constructor(connection) {
        this.OMS_ID = 1;
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getinstruments
     */
    getInstruments(params = {}) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_INSTRUMENTS, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getinstrument
     */
    getInstrument(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_INSTRUMENT, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getinstrumentverificationlevelconfig
     */
    getInstrumentVerificationLevelConfigs(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return this.connection.apRequest(Endpoint.GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG, RequestType.POST, paramsWithOMSId);
        });
    }
}
