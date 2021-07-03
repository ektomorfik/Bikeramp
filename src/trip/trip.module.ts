import { Module } from '@nestjs/common';
import { DistanceResolvingServiceToken } from 'src/infrastructure/di/distance-resolving-service.token';
import { TripDaoToken } from 'src/infrastructure/di/trip-dao.token';
import { TripController } from './adapters/presentation/trip.controller';
import { InMemoryDistanceResolvingService } from './core/infrastructure/in-memory-distance-resolving.service';
import { InMemoryTripDao } from './core/infrastructure/in-memory-trip.dao';
import { TripService } from './core/ports/trip.service';

@Module({
  controllers: [TripController],
  providers: [
    TripService,
    { provide: DistanceResolvingServiceToken, useClass: InMemoryDistanceResolvingService },
    { provide: TripDaoToken, useClass: InMemoryTripDao },
  ],
})
export class TripModule {}
