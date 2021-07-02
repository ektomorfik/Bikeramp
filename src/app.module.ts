import { Module } from '@nestjs/common';
import { StatisticsModule } from './statistics/statistics.module';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [TripModule, StatisticsModule],
})
export class AppModule {}
