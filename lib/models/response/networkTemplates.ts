export interface NetworkTemplates {
  name: string
  type: string
  required: boolean
}

export interface CurrencyNetworkTemplates {
  currency: string
  network: string
  network_name: string
  network_protocol: string
  template: NetworkTemplates[]
}