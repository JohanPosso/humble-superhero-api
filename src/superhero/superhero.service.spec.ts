import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superhero.service';

describe('SuperheroService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
