import { Module } from '@nestjs/common';
import { SuperheroesService } from './superhero.service';
import { SuperheroesController } from './superhero.controller';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class SuperheroModule {}
