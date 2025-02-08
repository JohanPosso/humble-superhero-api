// main.ts
import { NestFactory } from '@nestjs/core';
import { SuperheroModule } from './superhero/superhero.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(SuperheroModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://localhost:3001', // Cambia esto por la URL de tu frontend
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeceras permitidas
  });
  await app.listen(3000);
}
bootstrap();

