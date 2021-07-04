import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripEntity } from './shared/database/trip.entity';
import { StatisticsModule } from './statistics/statistics.module';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'bikeramp',
      entities: [TripEntity],
      synchronize: true, //note: in real-life application synchronize should be set to false and db schema should be managed by migrations
    }),
    TripModule,
    StatisticsModule,
  ],
})
export class AppModule {}
