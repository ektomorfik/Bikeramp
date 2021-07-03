import { Module } from '@nestjs/common';
import { TripController } from './presentation/trip.controller';

@Module({
  controllers: [TripController],
})
export class TripModule {}
