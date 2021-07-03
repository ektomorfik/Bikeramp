import { Controller, Get } from '@nestjs/common';
import { GetMonthlyStatsDto } from './dto/get-monthly-stats.dto';
import { GetWeeklyStatsDto } from './dto/get-weekly-stats.dto';

@Controller('/stats')
export class StatisticsController {
  @Get('/weekly')
  async getWeekly(): Promise<GetWeeklyStatsDto> {
    return new GetWeeklyStatsDto(10, 'km', 100, 'pln');
  }

  @Get('/monthly')
  async getMonthly(): Promise<GetMonthlyStatsDto[]> {
    return [new GetMonthlyStatsDto(new Date(), 100, 'km', 10, 32, 'pln')];
  }
}
