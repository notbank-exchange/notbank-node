import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceClient } from "../core/serviceClient";

import { completeParams } from "../utils/completeParams";

export class ReportService {
  #serviceCore: ServiceClient;
  private readonly OMS_ID = 1;

  constructor(serviceCore: ServiceClient) {
    this.#serviceCore = serviceCore;
  }
}
