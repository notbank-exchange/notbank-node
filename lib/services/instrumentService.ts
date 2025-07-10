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

  async getInstruments(
    params: GetInstrumentsRequest
  ): Promise<InstrumentResponse[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.connection.apRequest(
      Endpoint.GET_INSTRUMENTS,
      RequestType.POST,
      paramsWithOMSId
    )) as InstrumentResponse[];
  }

  public async getInstrument(
    params: GetInstrumentRequest
  ): Promise<InstrumentResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    const response = (await this.connection.apRequest(
      Endpoint.GET_INSTRUMENT,
      RequestType.POST,
      paramsWithOMSId
    )) as InstrumentResponse;

    return response;
  }

  async getInstrumentVerificationLevelConfigs(
    params: GetInstrumentVerificationLevelConfigRequest
  ): Promise<GetInstrumentVerificationLevelConfigResponse[]> {
    // Validate required parameters
    if (!params.AccountId) {
      throw new Error("AccountId is required.");
    }

    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    // Call the service endpoint
    const response = await this.connection.apRequest(
      Endpoint.GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG,
      RequestType.POST,
      paramsWithOMSId
    );

    return response as GetInstrumentVerificationLevelConfigResponse[];
  }
}
