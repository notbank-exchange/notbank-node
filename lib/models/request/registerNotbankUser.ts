import { Language } from "../enums/language";

export interface RegisterNotbankUser {
  firstName: string
  lastName: string
  phoneNumber?: string
  email?: string
  language?: Language
  firebaseToken?: string
}
