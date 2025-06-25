// Códigos de error posibles
export enum WithdrawErrorCode {
  NoError = 0,
  NotAuthorized = 20,
  InvalidRequest = 100,
  OperationFailed = 101,
  ServerError = 102,
  ResourceNotFound = 104,
}
