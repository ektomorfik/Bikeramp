import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//todo: should be injected via config
const GLOBAL_URL_PREFIX = '/api';
const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(GLOBAL_URL_PREFIX);
  app.useGlobalPipes(
    new ValidationPipe({
      //todo: move it to config
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await app.listen(PORT);
}
bootstrap();
