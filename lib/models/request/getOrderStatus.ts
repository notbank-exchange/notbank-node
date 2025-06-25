export interface GetOrderStatusRequest {
  AccountId?: number; // Condicionalmente requerido si no tienes permiso SUPERUSER
  OrderId?: number; // Condicionalmente requerido si no tienes permiso SUPERUSER
}
