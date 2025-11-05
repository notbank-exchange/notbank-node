// ! #reunion: (https://cryptomarket.atlassian.net/browse/CMKT-4155)
// ? - declaration is any?  docs dice: 
// ?     declaration: JSON con formato de esquema que se envía en get
// ? - what are files (no tiene tipo en docs)
export interface TraderPlusVerification {
  user_id: string
  declaration: any 
  FILES: any[]
}