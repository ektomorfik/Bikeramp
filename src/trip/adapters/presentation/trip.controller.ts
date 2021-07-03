import { Body, Controller, Post } from '@nestjs/common';
import { CreateTripDto } from './create-trip.dto';

@Controller('/trips')
export class TripController {
  @Post()
  async create(@Body() dto: CreateTripDto) {
    console.log(dto);
    //note: I am not returning location header because the resource is not accessible via GET method
  }
}
