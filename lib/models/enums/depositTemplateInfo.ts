import { DepositTemplate } from "./depositTemplate";

export interface DepositTemplateInfo {
  providerId: number; // ID del proveedor
  providerName: string; // Nombre del proveedor
  depositTemplate: DepositTemplate; // Objeto de plantilla de depósito
}
