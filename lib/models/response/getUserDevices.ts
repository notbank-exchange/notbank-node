// src/models/response/getUserDevices.ts
export interface UserDevice {
  HashCode: number; // Unique identifier for the user device
  Location: string; // Location, currently defaults to empty string
  DeviceName: string; // The name of the device
  IpAddress: string; // The IP address from where the device was registered
  UserId: number; // ID of the user who owns the device
  IsTrusted: boolean; // If true, the device is trusted
  ExpirationTime: number; // Expiration time in ticks format
}
