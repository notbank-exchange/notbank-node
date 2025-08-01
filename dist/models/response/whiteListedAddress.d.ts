export interface WhiteListedAddress {
    id: string;
    currency: string;
    label: string;
    network: string;
    address: string;
    memo?: string;
    verified: boolean;
}
