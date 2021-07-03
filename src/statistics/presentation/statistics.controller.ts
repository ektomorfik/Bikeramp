import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from '../logic/statistics.service';
import { GetMonthlyStatsDto } from './dto/get-monthly-stats.dto';
import { GetWeeklyStatsDto } from './dto/get-weekly-stats.dto';

@Controller('/stats')
export class StatisticsController {
  constructor(private readonly _statisticsService: StatisticsService) {}

  @Get('/weekly')
  async getWeekly(): Promise<GetWeeklyStatsDto> {
    const result = await this._statisticsService.getWeekly();

    return new GetWeeklyStatsDto(
      result.totalDistance,
      result.distanceMeasurementUnit,
      result.totalNetPrice,
      result.currencyCode,
    );
  }

  @Get('/monthly')
  async getMonthly(): Promise<GetMonthlyStatsDto[]> {
    return [new GetMonthlyStatsDto(new Date(), 100, 'km', 10, 32, 'pln')];
  }
}
