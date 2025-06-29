import { ServiceClient } from "../core/serviceClient.js";
import { HealthCheckResponse } from "../models/response/healthCheck.js";
import { PingResponse } from "../models/response/ping.js";
export declare class SystemService {
    #private;
    constructor(serviceCore: ServiceClient);
    ping(): Promise<PingResponse>;
    healthCheck(): Promise<HealthCheckResponse>;
}
