import { DistanceHelper } from '../helpers/distance.helper';
import { PriceHelper } from '../helpers/price.helper';

export class GetWeeklyStatsDto {
  total_distance: string;
  total_price: string;
  constructor(
    distance: number,
    distanceMeasurementUnit: string,
    netPrice: number,
    currencyCode: string,
  ) {
    this.total_distance = DistanceHelper.format(distance, distanceMeasurementUnit);
    this.total_price = PriceHelper.format(netPrice, currencyCode);
  }
}
