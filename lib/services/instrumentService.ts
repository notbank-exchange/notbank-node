import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { GetInstrumentRequest } from "../models/request/getInstrument";
import { GetInstrumentsRequest } from "../models/request/getInstruments";
import { GetInstrumentVerificationLevelConfigRequest } from "../models/request/getInstrumentVerificationLevelConfig";
import { GetInstrumentVerificationLevelConfigResponse } from "../models/response/getInstrumentVerificationLevelConfig";
import { InstrumentResponse } from "../models/response/instrument";
import { completeParams } from "../utils/completeParams";

export class InstrumentService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  getInstruments(
    params: GetInstrumentsRequest
  ): Promise<InstrumentResponse[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_INSTRUMENTS,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  getInstrument(
    params: GetInstrumentRequest
  ): Promise<InstrumentResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_INSTRUMENT,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  async getInstrumentVerificationLevelConfigs(
    params: GetInstrumentVerificationLevelConfigRequest
  ): Promise<GetInstrumentVerificationLevelConfigResponse[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG,
      RequestType.POST,
      paramsWithOMSId
    );
  }
}
