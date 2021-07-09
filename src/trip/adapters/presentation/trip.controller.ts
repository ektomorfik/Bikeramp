import { Body, Controller, Post } from '@nestjs/common';
import { Uuid } from '../../../trip/core/domain/Uuid';
import { TripService } from '../../../trip/core/ports/trip.service';
import { CreateTripDto } from './create-trip.dto';

@Controller('/trips')
export class TripController {
  constructor(private readonly _tripService: TripService) {}

  @Post()
  async create(@Body() dto: CreateTripDto) {
    const { startAddress, destinationAddress, price, date } = dto;
    const id = Uuid.new();
    await this._tripService.create(id, startAddress, destinationAddress, price, new Date(date));
    //note: I am not returning location header because the resource is not accessible via GET method
  }
}
