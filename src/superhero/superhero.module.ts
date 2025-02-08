import { Module } from '@nestjs/common';
import { SuperheroesService } from './superhero.service';
import { SuperheroesController } from './superhero.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    })],
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class SuperheroModule {}
