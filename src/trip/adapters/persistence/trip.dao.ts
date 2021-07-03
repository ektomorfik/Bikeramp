import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripEntity } from 'src/shared/database/trip.entity';
import { Repository } from 'typeorm';
import { Trip } from '../../core/domain/trip';
import { Uuid } from '../../core/domain/Uuid';
import { ITripDao } from '../../core/ports/trip-dao.interface';

@Injectable()
export class TripDao implements ITripDao {
  constructor(
    @InjectRepository(TripEntity)
    private readonly _tripRepository: Repository<TripEntity>,
  ) {}

  get(id: Uuid): Promise<Trip | null> {
    throw new Error('Method not implemented.');
  }

  async save(trip: Trip): Promise<void> {
    const entity = TripEntity.of(
      trip.id.value,
      trip.distance.value,
      trip.distance.unit,
      trip.netPrice.value,
      trip.netPrice.currencyCode,
      trip.date,
    );

    await this._tripRepository.save(entity);
    console.log(entity);
  }
}
