import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superhero.controller';
import { SuperheroesService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

describe('SuperheroController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should add a new superhero', () => {
    const superhero: CreateSuperheroDto = {
      name: 'Super Humble',
      superpower: 'Invisibility',
      humilityScore: 10,
    };

    controller.addSuperhero(superhero);
    expect(service.getAllSuperheroes()).toEqual(
      expect.arrayContaining([expect.objectContaining(superhero)]),
    );
  });
});