import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SuperheroesService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superhero } from './superhero.service';

@Controller('superheroes')
export class SuperheroesController {

  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
    return this.superheroesService.addSuperhero(createSuperheroDto);
  }

  @Get()
  getAllSuperheroes(): Superhero[] {
    return this.superheroesService.getAllSuperheroes();
  }

  @Put(':id')
  updateSuperhero(@Param('id') id: string, @Body() updateSuperheroDto: Partial<CreateSuperheroDto>): Superhero | null {
    return this.superheroesService.updateSuperhero(id, updateSuperheroDto);
  }

  @Delete(':id')
  deleteSuperhero(@Param('id') id: string): boolean {
    return this.superheroesService.deleteSuperhero(id);
  }
}
