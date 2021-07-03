import { Trip } from '../domain/trip';
import { Uuid } from '../domain/Uuid';
import { ITripDao } from '../ports/trip-dao.interface';

export class InMemoryTripDao implements ITripDao {
  private trips: Trip[] = [];
  get(id: Uuid): Promise<Trip | null> {
    const trip = this.trips.find((trip) => trip.id === id);
    return Promise.resolve(trip || null);
  }
  save(trip: Trip): Promise<void> {
    this.trips.push(trip);
    return Promise.resolve();
  }
}
