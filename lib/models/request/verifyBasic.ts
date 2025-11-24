import { Gender } from "../enums"
export interface VerifyBasicRequest {
  user_id?: string
  is_business: boolean
  profession: string
  gender: Gender
  city: string
  street: string
  country: string
  subjectComply?: string
  province?: string
  district?: string
  number?: string
  state?: string
  commune?: string
}