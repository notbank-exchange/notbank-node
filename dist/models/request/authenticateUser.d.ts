export interface AuthenticateUserRequest {
    ApiKey: string;
    Signature: string;
    UserId: string;
    Nonce: string;
}
