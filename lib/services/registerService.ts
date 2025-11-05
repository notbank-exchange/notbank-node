import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { RegisterNotbankUser, UserRegistration } from "../models";

export class RegisterService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  registerUser(request: RegisterNotbankUser): Promise<UserRegistration> {
    return this.connection.nbRequest(
      Endpoint.REGISTER,
      RequestType.POST,
      request
    );
  }
}
