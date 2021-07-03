import { Injectable } from '@nestjs/common';
import { Distance } from '../../core/domain/distance';
import { IDistanceResolvingService } from '../../core/ports/distance-resolving-service.interface';

@Injectable()
export class DistanceResolvingService implements IDistanceResolvingService {
  async resolve(startAddress: string, destinationAddress: string): Promise<Distance> {
    throw new Error('Method not implemented.');
  }
}
