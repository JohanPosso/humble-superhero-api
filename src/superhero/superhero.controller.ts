import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SuperheroesService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superhero } from './superhero.service';

/**
 * Controller for managing superheroes.
 */
@Controller('superheroes')
export class SuperheroesController {

  /**
   * Constructs a new instance of the SuperheroesController.
   * @param superheroesService - The service used to manage superheroes.
   */
  constructor(private readonly superheroesService: SuperheroesService) {}

  /**
   * Adds a new superhero.
   * @param createSuperheroDto - The data transfer object containing the details of the superhero to be created.
   * @returns The created superhero.
   */
  @Post()
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
    return this.superheroesService.addSuperhero(createSuperheroDto);
  }

  /**
   * Retrieves all superheroes.
   * @returns An array of all superheroes.
   */
  @Get()
  getAllSuperheroes(): Superhero[] {
    return this.superheroesService.getAllSuperheroes();
  }

  /**
   * Updates an existing superhero.
   * @param id - The ID of the superhero to be updated.
   * @param updateSuperheroDto - The data transfer object containing the updated details of the superhero.
   * @returns The updated superhero, or null if the superhero was not found.
   */
  @Put(':id')
  updateSuperhero(@Param('id') id: string, @Body() updateSuperheroDto: Partial<CreateSuperheroDto>): Superhero | null {
    return this.superheroesService.updateSuperhero(id, updateSuperheroDto);
  }

  /**
   * Deletes a superhero.
   * @param id - The ID of the superhero to be deleted.
   * @returns True if the superhero was successfully deleted, false otherwise.
   */
  @Delete(':id')
  deleteSuperhero(@Param('id') id: string): boolean {
    return this.superheroesService.deleteSuperhero(id);
  }
}
