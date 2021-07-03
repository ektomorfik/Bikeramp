import { Module } from '@nestjs/common';
import { TripController } from './adapters/presentation/trip.controller';

@Module({
  controllers: [TripController],
})
export class TripModule {}
