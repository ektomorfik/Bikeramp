import { Module } from '@nestjs/common';
import { StatisticsService } from './logic/statistics.service';
import { StatisticsController } from './presentation/statistics.controller';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
