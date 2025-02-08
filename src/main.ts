import { NestFactory } from '@nestjs/core';
import { SuperheroModule } from './superhero/superhero.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL;

async function bootstrap() {
  const app = await NestFactory.create(SuperheroModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: FRONTEND_URL,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  await app.listen(3000);
}
bootstrap();
