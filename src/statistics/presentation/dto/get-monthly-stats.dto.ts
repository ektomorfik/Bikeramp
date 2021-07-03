import { DistanceHelper } from '../helpers/distance.helper';
import { PriceHelper } from '../helpers/price.helper';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const daySuffixes = [
  'th',
  'st',
  'nd',
  'rd',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'st',
  'nd',
  'rd',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'st',
];

export class GetMonthlyStatsDto {
  day: string;
  total_distance: string;
  avg_ride: string;
  avg_price: string;

  constructor(
    date: Date,
    totalDistance: number,
    distanceMeasurementUnit: string,
    avgDistance: number,
    avgNetPrice: number,
    currencyCode: string,
  ) {
    const monthNo = date.getMonth();
    const dayOfTheMonth = date.getDate();
    this.day = `${monthNames[monthNo]}, ${dayOfTheMonth}${daySuffixes[dayOfTheMonth]}`;
    this.total_distance = DistanceHelper.format(totalDistance, distanceMeasurementUnit);
    this.avg_ride = DistanceHelper.format(avgDistance, distanceMeasurementUnit);
    this.avg_price = PriceHelper.format(avgNetPrice, currencyCode);
  }
}
