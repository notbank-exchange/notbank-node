import { User } from "../enums/user";

export interface AuthenticateUserResponse {
  Authenticated: boolean;
  SessionToken: string;
  User: User;
  Locked: boolean;
  Requires2FA: boolean;
  TwoFAType: string;
  TwoFAToken: string;
  errormsg: string;
}
