import { Injectable } from '@nestjs/common';
import { ApplicationException } from 'src/infrastructure/exceptions/application.exception';
import { Distance } from '../domain/distance';
import { IDistanceResolvingService } from '../ports/distance-resolving-service.interface';

@Injectable()
export class InMemoryDistanceResolvingService implements IDistanceResolvingService {
  async resolve(startAddress: string, destinationAddress: string): Promise<Distance> {
    const randomDistanceKm = Math.trunc(Math.random() * 15);
    const result = Distance.of(randomDistanceKm);
    if (!result.isRight()) {
      throw new ApplicationException(result.value.message);
    }

    return Promise.resolve(result.value);
  }
}
