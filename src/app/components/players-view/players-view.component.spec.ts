import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersViewComponent } from './players-view.component';

describe('PlayersViewComponent', () => {
  let component: PlayersViewComponent;
  let fixture: ComponentFixture<PlayersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
