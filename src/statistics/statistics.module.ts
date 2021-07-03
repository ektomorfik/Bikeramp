import { Module } from '@nestjs/common';
import { StatisticsController } from './presentation/statistics.controller';

@Module({
  controllers: [StatisticsController],
})
export class StatisticsModule {}
