import { Inject, Injectable } from '@nestjs/common';
import { Money } from '../domain/money';
import { Trip } from '../domain/trip';
import { Uuid } from '../domain/Uuid';
import { DistanceResolvingServiceToken } from '../../../infrastructure/di/distance-resolving-service.token';
import { IDistanceResolvingService } from './distance-resolving-service.interface';
import { ApplicationException } from 'src/infrastructure/exceptions/application.exception';
import { ITripDao } from './trip-dao.interface';
import { TripDaoToken } from 'src/infrastructure/di/trip-dao.token';

@Injectable()
export class TripService {
  constructor(
    @Inject(DistanceResolvingServiceToken)
    private readonly _distanceResolver: IDistanceResolvingService,
    @Inject(TripDaoToken)
    private readonly _tripDao: ITripDao,
  ) {}

  async create(
    id: Uuid,
    startAddress: string,
    destinationAddress: string,
    netPrice: number,
    date: Date,
  ) {
    if (!startAddress || !destinationAddress) {
      throw new ApplicationException('Both addresses are required');
    }

    const distance = await this._distanceResolver.resolve(startAddress, destinationAddress);
    const netPriceResult = Money.of(netPrice);
    if (!netPriceResult.isRight()) {
      throw new ApplicationException(netPriceResult.value.message);
    }

    const tripResult = Trip.of(id, distance, netPriceResult.value, date);
    if (!tripResult.isRight()) {
      throw new ApplicationException(tripResult.value.message);
    }

    await this._tripDao.save(tripResult.value);
    console.log(tripResult.value);
  }
}
