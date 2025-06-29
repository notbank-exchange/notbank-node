export interface Level1SummaryMin {
    InstrumentId: number;
    InstrumentSymbol: string;
    LastTradedPx: number;
    Rolling24HrPxChange: number;
    Rolling24HrPxChangePercent: number;
    Rolling24HrVolume: number;
}
export type GetLevel1SummaryMinResponse = Level1SummaryMin[];
