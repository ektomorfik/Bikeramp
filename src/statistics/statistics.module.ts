import { Module } from '@nestjs/common';
import { StatisticsService } from './logic/services/statistics.service';
import { StatisticsController } from './presentation/controllers/statistics.controller';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
