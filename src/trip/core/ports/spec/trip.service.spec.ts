import { ApplicationException } from 'src/infrastructure/exceptions/application.exception';
import { Uuid } from '../../domain/Uuid';
import { InMemoryDistanceResolvingService } from '../../infrastructure/in-memory-distance-resolving.service';
import { InMemoryTripDao } from '../../infrastructure/in-memory-trip.dao';
import { IDistanceResolvingService } from '../distance-resolving-service.interface';
import { ITripDao } from '../trip-dao.interface';
import { TripService } from '../trip.service';

const ADDRESS = 'Plac Europejski 2, Warszawa, Polska';
const EMPTY_ADDRESS = '';

describe('TripService', () => {
  let tripService: TripService;
  let tripDao: ITripDao;

  beforeEach(() => {
    const distanceResolver: IDistanceResolvingService = new InMemoryDistanceResolvingService();
    tripDao = new InMemoryTripDao();
    tripService = new TripService(distanceResolver, tripDao);
  });

  it('should create a valid trip', async () => {
    const id = Uuid.new();
    await tripService.create(id, ADDRESS, ADDRESS, 120, new Date());
    expect(await tripDao.get(id)).toBeTruthy();
  });

  it('should not allow to create a trip with empty address', async () => {
    await expect(
      tripService.create(Uuid.new(), EMPTY_ADDRESS, ADDRESS, 120, new Date()),
    ).rejects.toThrowError(ApplicationException);

    await expect(
      tripService.create(Uuid.new(), ADDRESS, EMPTY_ADDRESS, 120, new Date()),
    ).rejects.toThrowError(ApplicationException);
  });

  it('should not allow to create a trip with invalid price', async () => {
    await expect(
      tripService.create(Uuid.new(), ADDRESS, ADDRESS, -20, new Date()),
    ).rejects.toThrowError(ApplicationException);
    await expect(
      tripService.create(Uuid.new(), ADDRESS, ADDRESS, undefined as any, new Date()),
    ).rejects.toThrowError(ApplicationException);
  });

  it('should not allow to create a trip with invalid date', async () => {
    await expect(
      tripService.create(Uuid.new(), ADDRESS, ADDRESS, 0, undefined as any),
    ).rejects.toThrowError(ApplicationException);
  });
});
