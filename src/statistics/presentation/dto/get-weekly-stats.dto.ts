import { DistanceHelper } from '../helpers/distance.helper';
import { PriceHelper } from '../helpers/price.helper';

export class GetWeeklyStatsDto {
  total_distance: string;
  total_price: string;
  constructor(
    totalDistance: number,
    distanceMeasurementUnit: string,
    totalNetPrice: number,
    currencyCode: string,
  ) {
    this.total_distance = DistanceHelper.format(totalDistance, distanceMeasurementUnit);
    this.total_price = PriceHelper.format(totalNetPrice, currencyCode);
  }
}
