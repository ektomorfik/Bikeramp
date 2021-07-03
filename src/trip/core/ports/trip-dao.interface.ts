import { Trip } from '../domain/trip';
import { Uuid } from '../domain/Uuid';

export interface ITripDao {
  get(id: Uuid): Promise<Trip | null>;
  save(trip: Trip): Promise<void>;
}
