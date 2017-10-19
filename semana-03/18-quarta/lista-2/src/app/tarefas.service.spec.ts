import { TestBed, inject } from '@angular/core/testing';

import { TarefasService } from './tarefas.service';

describe('TarefasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarefasService]
    });
  });

  it('should be created', inject([TarefasService], (service: TarefasService) => {
    expect(service).toBeTruthy();
  }));
});
