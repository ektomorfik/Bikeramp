import { Expose } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTripDto {
  @Expose({ name: 'start_address' })
  @IsNotEmpty()
  startAddress!: string;

  @Expose({ name: 'destination_address' })
  @IsNotEmpty()
  destinationAddress!: string;

  @IsNumber()
  price!: number;

  @IsDate()
  date!: Date;
}
