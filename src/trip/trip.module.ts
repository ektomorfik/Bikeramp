import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistanceResolvingServiceToken } from '../infrastructure/di/distance-resolving-service.token';
import { TripDaoToken } from '../infrastructure/di/trip-dao.token';
import { TripEntity } from '../shared/database/trip.entity';
import { TripDao } from './adapters/persistence/trip.dao';
import { TripController } from './adapters/presentation/trip.controller';
import { InMemoryDistanceResolvingService } from './core/infrastructure/in-memory-distance-resolving.service';
import { TripService } from './core/ports/trip.service';

@Module({
  imports: [TypeOrmModule.forFeature([TripEntity])],
  controllers: [TripController],
  providers: [
    TripService,
    { provide: DistanceResolvingServiceToken, useClass: InMemoryDistanceResolvingService },
    { provide: TripDaoToken, useClass: TripDao },
  ],
})
export class TripModule {}
