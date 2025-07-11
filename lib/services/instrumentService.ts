import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { GetInstrumentRequest } from "../models/request/getInstrument";
import { GetInstrumentsRequest } from "../models/request/getInstruments";
import { GetInstrumentVerificationLevelConfigRequest } from "../models/request/getInstrumentVerificationLevelConfig";
import { InstrumentVerificationLevelConfig } from "../models/response/getInstrumentVerificationLevelConfig";
import { Instrument } from "../models/response/instrument";
import { completeParams } from "../utils/completeParams";

export class InstrumentService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#getinstruments
   */
  getInstruments(
    params: GetInstrumentsRequest
  ): Promise<Instrument[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_INSTRUMENTS,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getinstrument
   */
  getInstrument(
    params: GetInstrumentRequest
  ): Promise<Instrument> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_INSTRUMENT,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getinstrumentverificationlevelconfig
   */
  async getInstrumentVerificationLevelConfigs(
    params: GetInstrumentVerificationLevelConfigRequest
  ): Promise<InstrumentVerificationLevelConfig[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG,
      RequestType.POST,
      paramsWithOMSId
    );
  }
}
