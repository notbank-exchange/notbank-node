import { DocumentAdressType } from "../enums/documentAdressType"

export interface TraderVerification {
  pep: boolean
  subject_comply: boolean
  is_public_servant: boolean
  document_address_file: File
  document_address_type: DocumentAdressType
}