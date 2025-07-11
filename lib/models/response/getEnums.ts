// src/models/response/getEnums.ts
export interface EnumValue {
  Name: string; // The name of the enum
  Description: string; // Description of the enum
  Number: number; // Numeric value of the enum
}

export interface EnumsResponse {
  Class: string; // The class name
  Property: string; // The property name
  Enums: EnumValue[]; // The array of enum values
}
