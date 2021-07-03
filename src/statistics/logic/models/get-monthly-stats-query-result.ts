export interface GetMonthlyStatsQueryResult {
  date: string;
  totalDistance: number;
  avgNetPrice: number;
  avgDistance: number;
  currencyCode: string;
  distanceMeasurementUnit: string;
}
