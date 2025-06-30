export interface EnumValue {
    Name: string;
    Description: string;
    Number: number;
}
export interface GetEnumsResponse {
    Class: string;
    Property: string;
    Enums: EnumValue[];
}
