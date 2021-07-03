import { Distance } from '../domain/distance';

export interface IDistanceResolvingService {
  resolve(startAddress: string, destinationAddress: string): Promise<Distance>;
}
