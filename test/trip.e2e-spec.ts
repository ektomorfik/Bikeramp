import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TripModule } from '../src/trip/trip.module';
import { TripService } from '../src/trip/core/ports/trip.service';
import { InMemoryDistanceResolvingService } from '../src/trip/core/infrastructure/in-memory-distance-resolving.service';
import { InMemoryTripDao } from '../src/trip/core/infrastructure/in-memory-trip.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripEntity } from '../src/shared/database/trip.entity';
import { CreateTripDto } from '../src/trip/adapters/presentation/create-trip.dto';
import { ExceptionInterceptor } from '../src/infrastructure/interceptors/exception.interceptor';

describe('Trips', () => {
  let app: INestApplication;
  const distanceResolver = new InMemoryDistanceResolvingService();
  const tripDao = new InMemoryTripDao();
  const tripService = new TripService(distanceResolver, tripDao);

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TripModule,
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'bikeramp',
          entities: [TripEntity],
          synchronize: true, //note: in real-life application synchronize should be set to false and db schema should be managed by migrations
        }),
      ],
    })
      .overrideProvider(TripService)
      .useValue(tripService)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalInterceptors(new ExceptionInterceptor());
    await app.init();
  });

  it(`/POST trips`, () => {
    const dto = new CreateTripDto();
    dto.startAddress = 'Powstańców';
    dto.destinationAddress = 'Powstańców';
    dto.price = 100;
    dto.date = '2021-07-09';
    return request(app.getHttpServer()).post('/trips').send(dto).expect(201);
  });

  it(`/POST should not create trip with a negative price`, () => {
    const dto = new CreateTripDto();
    dto.startAddress = 'Powstańców';
    dto.destinationAddress = 'Powstańców';
    dto.price = -20;
    dto.date = '2021-07-09';
    return request(app.getHttpServer())
      .post('/trips')
      .send(dto)
      .expect(400)
      .expect((response) => {
        expect(response.body).toEqual({
          error: 'Bad Request',
          message: 'Money cannot be a negative number',
          statusCode: 400,
        });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
