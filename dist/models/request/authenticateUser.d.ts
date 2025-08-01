export interface AuthenticateUserRequest {
    APIKey: string;
    Signature: string;
    UserId: string;
    Nonce: string;
}
