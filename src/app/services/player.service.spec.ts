import { TestBed } from '@angular/core/testing';

import { PlayersService } from './player.service';

describe('PlayerService', () => {
  let service: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
