import { Gender, VerificationOrigin } from "../enums"

export interface BasicVerification {
  origin: VerificationOrigin
  user_id?: string
  is_business: boolean
  profession: string
  gender: Gender
  city: string
  street: string
  country: string
}