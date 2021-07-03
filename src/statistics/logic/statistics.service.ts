import { Injectable } from '@nestjs/common';
import { TripEntity } from 'src/shared/database/trip.entity';
import { NullableProps } from 'src/shared/types/nullable-props.type';
import { Connection } from 'typeorm';
import { DateTimeHelper } from './helpers/date-time.helper';
import { GetWeeklyStatsQueryResult } from './models/get-weekly-stats-query-result';

@Injectable()
export class StatisticsService {
  constructor(private readonly _connection: Connection) {}
  async getWeekly(): Promise<GetWeeklyStatsQueryResult> {
    const startOfTheWeek = DateTimeHelper.getStartOfTheWeek();
    const endOfTheWeek = DateTimeHelper.getEndOfTheWeek();

    const result = await this._connection
      .createQueryBuilder(TripEntity, 'trip')
      .select('SUM(trip.distance) as totalDistance')
      .addSelect('SUM(trip.netPrice) as totalNetPrice')
      .addSelect('trip.currencyCode as currencyCode')
      .addSelect('trip.distanceMeasurementUnit as distanceMeasurementUnit')
      .where(`trip.dateUtc BETWEEN '${startOfTheWeek}' AND '${endOfTheWeek}'`)
      .getRawOne<NullableProps<GetWeeklyStatsQueryResult>>();

    return {
      totalDistance: result.totalDistance || 0,
      totalNetPrice: result.totalNetPrice || 0,
      currencyCode: result.currencyCode || 'pln',
      distanceMeasurementUnit: result.distanceMeasurementUnit || 'km',
    };
  }
}
