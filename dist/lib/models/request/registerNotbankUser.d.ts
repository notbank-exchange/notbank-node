export interface RegisterNotbankUserRequest {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email?: string;
    language?: "en" | "es" | "pt";
    firebaseToken?: string;
}
