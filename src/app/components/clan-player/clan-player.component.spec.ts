import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanPlayerComponent } from './clan-player.component';

describe('ClanPlayerComponent', () => {
  let component: ClanPlayerComponent;
  let fixture: ComponentFixture<ClanPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClanPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
