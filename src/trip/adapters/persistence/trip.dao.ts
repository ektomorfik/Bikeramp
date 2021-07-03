import { Injectable } from '@nestjs/common';
import { Trip } from '../../core/domain/trip';
import { Uuid } from '../../core/domain/Uuid';
import { ITripDao } from '../../core/ports/trip-dao.interface';

@Injectable()
export class TripDao implements ITripDao {
  get(id: Uuid): Promise<Trip | null> {
    throw new Error('Method not implemented.');
  }
  save(trip: Trip): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
