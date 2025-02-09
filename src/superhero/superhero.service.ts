import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { v4 as uuidv4 } from 'uuid';

export interface Superhero extends CreateSuperheroDto {
  id: string;
}

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  addSuperhero(superhero: CreateSuperheroDto) {
    const newSuperhero: Superhero = { ...superhero, id: uuidv4() };
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }

  getAllSuperheroes() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }

  updateSuperhero(id: string, updateSuperheroDto: Partial<CreateSuperheroDto>) {
    const index = this.superheroes.findIndex(hero => hero.id === id);
    if (index !== -1) {
      this.superheroes[index] = { ...this.superheroes[index], ...updateSuperheroDto };
      return this.superheroes[index];
    }
    return null;
  }

  deleteSuperhero(id: string) {
    const initialLength = this.superheroes.length;
    this.superheroes = this.superheroes.filter(hero => hero.id !== id);
    return this.superheroes.length < initialLength;
  }
}
