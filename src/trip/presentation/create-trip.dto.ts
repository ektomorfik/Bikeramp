import { Expose } from 'class-transformer';
import { IsDate, IsPositive } from 'class-validator';

export class CreateTripDto {
  @Expose({ name: 'start_address' })
  startAddress!: string; //todo validation

  @Expose({ name: 'destination_address' })
  destinationAddress!: string; //todo validation

  @IsPositive()
  price!: number;

  @IsDate()
  date!: Date;
}
